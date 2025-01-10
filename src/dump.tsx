// const AuthModal = forwardRef<HTMLDivElement, AuthModalProps>(
//   ({ closeModal, heading, mode }, ref) => {
//     const [formData, setFormData] = useState({
//       username: "",
//       password: "",
//     });

//     const endpoint = mode == "signup" ? "register" : "login";

//     const onSubmit = () => {
//       handleSubmit(formData, endpoint);
//     };

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       const { name, value } = e.target;
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     return (
//       <div className="auth-modal" ref={ref}>
//         <h1 className="title">{heading}</h1>

//         <div className="content">
//           {/* social login component */}
//           <SocialLogin label="Sign Up" />

//           <LocalAuthForm
//             formData={formData}
//             onSubmit={onSubmit}
//             handleInputChange={handleInputChange}
//           />

//           <div
//             className="cancel_btn"
//             onClick={closeModal}
//             aria-label="Close modal"
//           >
//             <CancelSvg />
//           </div>
//           <div className="footer">
//             <p>
//               Already have an account?
//               <button>Sign in</button>
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// );
// export default AuthModal;
