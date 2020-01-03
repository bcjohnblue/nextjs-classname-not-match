export default () => {
  const token = process.browser ? localStorage.getItem('token') : ''
  const className = token ? 'token' : ''
  console.log('className:', className);

  return (
    <div className={className}>
      {token}
    </div>
  )
}
