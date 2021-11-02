export default function Layout(props: {children: JSX.Element}) {
  const styles = {
    margin: '0 10%',
  };

  return (
    <div style={styles}>
      {props.children}
    </div>
  )
}
