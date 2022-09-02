const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__illustrations">
        <img src="assets/atari-bg.svg" alt="atari illustrasyon"/>
        <img src="assets/atari.svg" alt="atari arkaplan"/>
      </div>
      <div className="hero__content">
        <p className="hero__content--main">
          Ankara’daki üniversite toplulukları tarafından organize edilen bu etkinliğin amacı,
          farkındalık yarattığımız bir Game Jam ortamı oluşturmaktır! Etkinliğin gerçekleşeceği
          48 saat boyunca bu farkındalığımızı kullanarak oyun yapmayı, oyun yaparken de eğlenmeyi
          hedefliyoruz!
        </p>
        <p className="hero__content--detail">
          21-22-23 Ekim tarihlerinde gerçekleşecek olan etkinliğin detayları için bu siteyi inceleyebilirsiniz.
        </p>
      </div>
    </section>
  );
};

export default Hero;
