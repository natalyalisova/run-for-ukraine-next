import TextGradient from "@/app/components/AnimatedTextGradient";
import Run2024 from "@/app/components/Run2024";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import YogaCallToActionToRegister from "@/app/components/YogaCallToActionToRegister";

const RegistrationForYoga = () => {
  const t = useTranslations("RegistrationForYoga");
  return (
    <>
      {/* <div className="text-center md:pt-16">
        <div className="flex items-center p-6 flex-col rounded-xl max-w-6xl mx-auto">
          <div className="justify-start py-3 max-w-[1024px] mt-4">
            <TextGradient text={t("title")} />
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
            <div className="flex justify-start text-start flex-col text-base md:text-lg mt-10">
              <p>
                Приєднуйтесь до #YogaForUkraine в Тель-Авіві — особливих занять
                йогою під керівництвом професійного українського тренера.
                #YogaForUkraine адаптована та підходить абсолютно усім,
                незалежно від рівня підготовки. Наші заняття допоможуть не лише
                покращити моральний та фізичний стан, і разом ми можемо робити
                добрі справи для ЗСУ. 100% донатів з наших занять будуть
                спрямовані на потреби ЗСУ. Разом з нашим тренером Софією чекаємо
                вас на ковриках, беріть з собою 💛💙 символіку, воду та чудовий
                настрій.
              </p>
            </div>
            <div className="flexCenter my-6">
              <YogaCallToActionToRegister />;
            </div>
          </div>
        </div>
      </div> */}
      <div className="flexCenter pt-[250px] bg-img-24-aug-24 mb-6"></div>
    </>
  );
};

export default RegistrationForYoga;
