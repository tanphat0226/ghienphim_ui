const Footer = () => {
  return (
    <footer className='te bg-slate-900 text-white'>
      <section className='pt-6'>
        <h4 className='text-center text-xl'>‼️Disclaimer‼️</h4>
        <p className='mx-auto mt-3 w-[550px] text-center text-sm'>
          Website này chỉ phục vụ mục đích học tập, cung cấp nội dung từ các nguồn công khai trên
          internet và không nhằm mục đích thương mại.Nội dung được tổng hợp từ internet và không sở
          hữu bản quyền, trừ khi có thông báo khác. Chúng tôi không chịu trách nhiệm về tính chính
          xác hoặc đầy đủ của thông tin.
        </p>
      </section>
      <div className='my-6 h-[1px] bg-gray-300'></div>
      <section className='pb-6 text-sm'>
        <p className='mt-2 text-center'>
          Copyright © {new Date().getFullYear()}{' '}
          <a
            className='cursor-pointer hover:text-coral-400 hover:underline'
            href='https://github.com/tanphat0226'
            target='_blank'
            rel='noopener noreferrer'
          >
            tanphat0226
          </a>
        </p>
      </section>
    </footer>
  )
}

export default Footer
