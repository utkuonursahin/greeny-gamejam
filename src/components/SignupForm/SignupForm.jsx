function SignupForm() {
  return (
    <section className="signup-form">
      <h1 className="heading-1">Form</h1>
      <p>
        Game Jam’e kaydolmak için aşağıda linki bulunan formu doldurmalısın.<br/>
        <span>Dikkat!</span> Formu doldurduktan sonra Jam tarihine yakın bir vakitte gelecek olan onay mailini yanıtlamayı unutma!
      </p>
      <button><a href="https://forms.gle/1A81tTPFBSkNX8Rm9" target="_blank" rel="noreferrer">Kayıt Ol</a></button>
    </section>
  );
}

export default SignupForm;