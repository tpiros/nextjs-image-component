import Image from 'next/image';

export default function Home() {
  return (
    <div class="container">
      <div class="left">
        <h1>Next.js Image</h1>
        <Image src="/img/sample.jpg" alt="Sample" width={500} height={333} />
        <Image src="/img/sample2.jpg" alt="Sample" width={500} height={500} />
        <Image src="/img/sample3.jpg" alt="Sample" width={500} height={306} />
      </div>
      <div class="right">
        <h1>Cloudinary Image</h1>
        <img
          width="500"
          src="https://res.cloudinary.com/tamas-demo/image/upload/w_500,f_webp,q_auto/img-component/sample.jpg"
          alt="Sample Image"
        />
        <img
          width="500"
          src="https://res.cloudinary.com/tamas-demo/image/upload/w_500,f_webp,q_auto/img-component/sample2.jpg"
          alt="Sample Image"
        />
        <img
          width="500"
          src="https://res.cloudinary.com/tamas-demo/image/upload/w_500,f_webp,q_auto/img-component/sample3.jpg"
          alt="Sample Image"
        />
      </div>
    </div>
  );
}
