import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./Form.module.css";
import { Button } from "../../components/componentsindex.js";

const Form = () => {
  return (
    <div className={Style.Form}>
      <div className={Style.Form_box}>
        <form>
          <div className={Style.Form_box_input}>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="shoaib bhai"
              className={Style.Form_box_input_userName}
            />
          </div>

         
        </form>
      </div>
    </div>
  );
};

export default Form;
