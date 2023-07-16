const ParentClass = (props) => (
    <ChildClass color= {props.color} />
  )
  
  const ChildClass = (props) => (
    <GrandChildClass color= {props.color} />
  )
  
  const GrandChildClass = (props) => (
    <p>Color: {props.color}</p>
  )