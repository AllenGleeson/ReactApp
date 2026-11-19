const IMAGE_ROOT = `${import.meta.env.BASE_URL}data/images`;

export const overviewImageUrl = (file) => (file ? `${IMAGE_ROOT}/overview/${file}` : null);

// Pick black or white text for a given background colour (#rgb or #rrggbb).
export function readableTextOn(hex) {
    let h = (hex || '').replace('#', '').slice(0, 6);
    if (h.length === 3) h = h.split('').map((c) => c + c).join('');
    const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
    if ([r, g, b].some(Number.isNaN)) return '#ffffff';
    const lin = (c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
    const luminance = 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
    return luminance > 0.4 ? '#111111' : '#ffffff';
}

// CSS variables that theme a project's buttons and accents.
export const projectThemeVars = (project) => {
    const color = project.fields.colorTheme?.[0] ?? '#99e7e4';
    return { '--project': color, '--on-project': readableTextOn(color) };
};

// Split "Live Site"/"GitHub" style links into labelled pairs.
export const projectLinks = (project) =>
    (project.fields.links?.link ?? []).map((href, i) => ({
        href,
        label: project.fields.links.linkName?.[i] ?? 'Link',
    }));

export const liveSiteUrl = (project) =>
    projectLinks(project).find((l) => /live|demo|site/i.test(l.label))?.href;
