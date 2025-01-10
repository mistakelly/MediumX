// export const AuthButton: React.FC<AuthButtonProps> = ({
//   buttonLabel,
//   onSubmit,
// }) => {
//   return (
//     <>
//       <div className="submit-btn">
//         <button className="stylish-button" onClick={onSubmit}>
//           {buttonLabel}
//         </button>
//       </div>
//     </>
//   );
// };

// const SocialLogin = (prop: Record<string, any>) => {
//   return (
//     <div className="content">
//       <a className="btns google__btn" href="#">
//         <GoogleSvg />

//         <span>{prop.label} with Google</span>
//         <div></div>
//       </a>
//       <div className="btns email__btn">
//         <EmailSvg />
//         <span>{prop.label} with Email</span>
//         <div></div>
//       </div>
//     </div>
//   );
// };

// const CancelSVG: React.FC<CancelSVGProps> = ({ closeModal }) => {
//   return (
//     <div className="cancel_btn" onClick={closeModal} aria-label="Close modal">
//       <CancelSvg />
//     </div>
//   );
// };

// const AuthModalFooter: React.FC<AuthModalFooterProps> = ({
//   question,
//   buttonLabel,
// }) => {
//   return (
//     <div className="footer">
//       <p>
//         {question}
//         <button>{buttonLabel}</button>
//       </p>
//     </div>
//   );
// };

// const LocalAuthForm: React.FC<LocalAuthFormProps> = ({
//   formData,
//   handleInputChange,
//   onSubmit,
// }) => {
//   return (
//     // <>
//     <section className="local-auth-container">
//       <div className="heading">
//         <PersonSvg />
//         <p>Username & Password</p>
//         <PasswordSvg />
//       </div>

//       <form>
//         <div className="local-auth-div">
//           <label htmlFor="username">Username:</label>
//           <input
//             name="username"
//             type="text"
//             value={formData.username}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div className="local-auth-div">
//           <label htmlFor="password">Password:</label>
//           <input
//             name="password"
//             type="text"
//             value={formData.password}
//             onChange={handleInputChange}
//           />
//         </div>
//       </form>
//     </section>
//   );
// };
