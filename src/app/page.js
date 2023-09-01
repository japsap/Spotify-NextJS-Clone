"use client";

import {
  CustomLogonav,
  Line,
  Switch,
} from "@components/FixedComponents/components";

import { EyeIcon, EyeOff } from "lucide-react";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

const page = () => {
  const { data: session } = useSession();


  const [providers, setProviders] = useState(null);
  const [togglePass, setTogglePass] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);

  if(session){
    redirect('/account')
  }


  return (
    <div className="column bg-black md:bg-gradient-to-b md:from-[#1A1A1A] md:to-[#030303]">
      <CustomLogonav />
      <div className="flex-center md:p-10">
        <div className="bg-[#000000] column p-7 md:p-20 w-full md:w-max rounded-lg">
          <div className="column  items-center gap-10 md:gap-11">
            <h1 className="text-white text-left font-bold text-3xl lg:text-5xl">
              Впишете се в Spotify
            </h1>
            <div className="column w-full md:w-max items-center gap-3">
              {providers &&
                Object.values(providers).map((provider) => {
                  return (
                    <button
                      onClick={() => signIn(provider.id, { callbackUrl: `${window.location.origin}/account` }).then(res => console.log(res))}
                      key={provider.id}
                      className="flex-center gap-3 text-white border font-semibold border-gray-400 w-full px-14 py-2 rounded-full"
                    >
                      <Image
                        src={`/images/${provider.name}.png`}
                        width={25}
                        height={25}
                        alt="image"
                      />
                      Продължете с {provider.name}
                    </button>
                  );
                })}
            </div>
            <Line />

            <div className="column gap-5 w-full md:w-[350px]">
              <div className="column gap-1">
                <label className="login_label">
                  Имейл или потребителско име
                </label>
                <input
                  className="login_input"
                  type="text"
                  placeholder="Имейл или потребителско име"
                />
              </div>
              <div className="column gap-1 relative">
                <label className="login_label">Парола</label>
                <input
                  className="login_input"
                  type="text"
                  placeholder="Парола"
                />

                {!togglePass ? (
                  <EyeOff
                    className="login_icon"
                    onClick={() => setTogglePass((prev) => !prev)}
                  />
                ) : (
                  <EyeIcon
                    className="login_icon"
                    onClick={() => setTogglePass((prev) => !prev)}
                  />
                )}
              </div>
              <Switch text={true} />
            </div>

            <div className="column gap-5 w-full md:w-max">
              <button className="text-black bg-[var(--green)] font-semibold md:w-[300px] px-14 py-3 rounded-full">
                Вход
              </button>
              <p className="underline text-white text-base text-center ">
                Забравихте паролата си?
              </p>
            </div>

            <Line />

            <div className="flex-center gap-3 text-base text-white">
              <p>Нямате акаунт? </p>
              <Link href="/" className="underline">
                Регистрирайте се в Spotify
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
