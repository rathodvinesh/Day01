
function MyBtn (text,{children},{handleClicked}) {
  return (
    <>
    <button className='bg-yellow-400 rounded' onClick={handleClicked}>{text}</button>
    {children}
    </>
  )
}

export default MyBtn;
