const Input = (props) => (
  <div className="inputBlock">
    <div className="coveInput" >
      <input type="text"/>
    </div>
    <div className="inputLabel">{props.label}</div>
    <style jsx>{`
      .coveInput {
        position: relative;
        border-bottom: 1px solid #777A81;
        border-left: 0px;
        border-top: 0px;
        border-right: 0px;
        &::before {
          position: absolute;
          bottom: 0px;
          left: 0px;
          content: "";
          border-left: 1px solid #777A81;
          height: 8px;
          width: 1px;
        }
        &::after {
          position: absolute;
          bottom: 0px;
          right: 0px;
          content: "";
          border-left: 1px solid #777A81;
          height: 8px;
          width: 1px;
        }
        input {
          border: 0px;
          width: 100%;
        }
      }
      .inputLabel {
        font-family: GothamRoundedBook;
        font-size: 12px;
        color: #191E2B;
        margin-top: 4px;
      }
    `}
    </style>
  </div>
)

export default Input