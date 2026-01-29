import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ComingSoon = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Swal.fire({
      title: "Coming Soon ",
      text: "This Page is under development",
      icon: "info",
      confirmButtonText: "OK",
      confirmButtonColor: "#0CAF60",
    }).then(() => {
      navigate(-1); 
    });
  }, [navigate]);

  return null; 
};

export default ComingSoon;
