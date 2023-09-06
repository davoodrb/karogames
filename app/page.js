import Link from "next/link";

// Icons
import { BsDiscord } from "react-icons/bs";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { SiAparat } from "react-icons/si";
import { HiServer } from "react-icons/Hi";
import { RxUpdate } from "react-icons/rx";
import { BiSupport } from "react-icons/bi";

// Components
import Feature from "@/components/Cards/FeatureCard";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <div
        id="banner"
        className="text-center py-[240px] bg-[url('/images/banner.png')] bg-cover"
      >
        <h1 className="text-4xl font-bold p-2">کاروگیمز رول پلی</h1>
        <p className="px-2">ماجراجویی های جدید ، آپدیت های مداوم و بیشتر</p>

        <div id="buttons" className="mt-4">
          <Link
            href="/download-install"
            className="py-1 px-4 bg-primary rounded"
          >
            دانلود و ورود به سرور
          </Link>
          <Link href="/rules" className="mr-2 py-1 px-4 bg-secondary rounded">
            قوانین
          </Link>
        </div>
        <div
          id="social-media"
          className="mt-4 bg-secondary w-fit mx-auto py-2 px-4 rounded flex items-center justify-center space-x-4 space-x-reverse"
        >
          <a href="#" aria-label="Discord" title="دیسکورد">
            <BsDiscord size="25px" color="white" />
          </a>
          <a href="#" aria-label="Instagram" title="اینستاگرام">
            <AiFillInstagram size="25px" color="white" />
          </a>
          <a href="#" aria-label="Youtube" title="یوتیوب">
            <AiFillYoutube size="25px" color="white" />
          </a>
          <a href="#" aria-label="Aparat" title="آپارات">
            <SiAparat size="25px" color="white" />
          </a>
        </div>
      </div>

      {/* Server IP */}
      <div
        id="server-ip"
        className="flex items-center justify-between bg-secondary p-4 sm:px-8"
      >
        <div>
          <h3 className="text-2xl font-semibold">آی پی سرور</h3>
          <p>هر دو آیپی در دسترس هستند.</p>
        </div>
        <div>
          <div className="flex flex-row-reverse items-baseline">
            <HiServer size="15px" />
            <p className="mx-2">Sv.KaroGames.iR</p>
          </div>
          <div className="flex flex-row-reverse items-center">
            <HiServer size="15px" />
            <p className="mx-2">نامشخص</p>
          </div>
        </div>
      </div>

      {/* Server features */}
      <div
        id="features"
        className="flex py-4 px-4 gap-4 flex-wrap sm:flex-nowrap items-stretch "
      >
        <Feature
          cardIcon={<RxUpdate size="50px" />}
          cardTitle="آپدیت های هفتگی"
          cardDesc="هر هفته با توجه به پیشنهادات شما و مشکلات گزارش شده ، آپدیت هایی جهت بهبود سرور منتشر میشوند."
        />
        <Feature
          cardIcon={<BiSupport size="50px" />}
          cardTitle="استف ۲۴/۷"
          cardDesc="تیم استف ما در هر شرایطی در سرور هستند تا در صورت به وجود آمدن هرمشکلی به شما کمک کنند."
        />
        <Feature
          cardIcon={<HiServer size="50px" />}
          cardTitle="سرور های قدرتمند"
          cardDesc="سرور های کاروگیمز با امنیت و توان بالا از هرگونه لگ در روند بازی جلوگیری میکنند و میتوانید بدون دغدغه به آرپی کردن بپردازید."
        />
      </div>
    </>
  );
}
