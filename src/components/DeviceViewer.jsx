import { useLayoutEffect, useRef, useState } from 'react';
import './DeviceViewer.css';

// Real screen sizes; the frame is scaled down to fit the available space.
const DEVICES = {
    mobile: { label: 'Mobile', width: 375, height: 740, bezel: 14, maxHeight: 620 },
    tablet: { label: 'Tablet', width: 768, height: 1024, bezel: 18, maxHeight: 620 },
    desktop: { label: 'Desktop', width: 1280, height: 800, bezel: 14, maxHeight: 640 },
};

function useWidth(ref) {
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return undefined;
        setWidth(el.clientWidth);
        if (typeof ResizeObserver === 'undefined') return undefined;
        const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
        observer.observe(el);
        return () => observer.disconnect();
    }, [ref]);

    return width;
}

const DeviceViewer = ({ site, title = 'Website preview', initialDevice = 'desktop' }) => {
    const [device, setDevice] = useState(initialDevice);
    const stageRef = useRef(null);
    const available = useWidth(stageRef);

    const spec = DEVICES[device] ?? DEVICES.desktop;
    const frameWidth = spec.width + spec.bezel * 2;
    const frameHeight = spec.height + spec.bezel * 2;
    const scale = available
        ? Math.min(1, available / frameWidth, spec.maxHeight / frameHeight)
        : 0;

    return (
        <div className="device-viewer">
            <div className="device-selector" role="group" aria-label="Preview size">
                {Object.entries(DEVICES).map(([key, { label }]) => (
                    <button
                        key={key}
                        type="button"
                        className={`btn-outline-accent${device === key ? ' is-active' : ''}`}
                        aria-pressed={device === key}
                        onClick={() => setDevice(key)}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="device-stage" ref={stageRef}>
                <div
                    className="device-scaler"
                    style={{
                        width: frameWidth * scale,
                        height: frameHeight * scale,
                        visibility: scale ? 'visible' : 'hidden',
                    }}
                >
                    <div
                        className={`device-frame device-${device}`}
                        style={{
                            width: frameWidth,
                            height: frameHeight,
                            padding: spec.bezel,
                            transform: `scale(${scale})`,
                        }}
                    >
                        <iframe
                            src={site}
                            title={`${title} (${spec.label.toLowerCase()})`}
                            width={spec.width}
                            height={spec.height}
                            loading="lazy"
                        />
                    </div>
                </div>
                <a className="device-open-link" href={site} target="_blank" rel="noopener noreferrer">
                    Open site in a new tab ↗
                </a>
            </div>
        </div>
    );
};

export default DeviceViewer;
