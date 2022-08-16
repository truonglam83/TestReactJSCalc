import { useState } from 'react';

function App() {
  //khai bao useState cho viec update phep tinh
  const [calc, setCalc] = useState("");
  //cac toan tu su dung cho viec check input(tru dau "-" de su dung so am)
  const opt = ['+', '*', '/', '.'];

  const updateCalc = value => {
    //Kiem tra va khong cho phep 2 toan tu lien tuc va khi chua nhap thi khong duoc dung toan tu
    if (
      opt.includes(value) && calc === '' ||
      opt.includes(value) && opt.includes(calc.slice(-1))
    ) {
      return;
    }
    setCalc(calc + value);
  }

  // Tao button cac so 1 - 9
  const numberCreate = () => {
    const numbers = [];
    for (let i = 1; i < 10; i++) {
      numbers.push(
        <button key={i}
          onClick={() => updateCalc(i.toString())}>
          {i}
        </button>
      )
    }
    return numbers;
  }

  //Thuc hien phep tinh, gan cho dau "="
  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  // Su dung button "Clear = C " de xoa cac ki tu
  const deleteNumber = () => {
    if (calc == '') {
      return; // kiem tra neu display rong, thi khong thuc hien
    }
    const value = calc.slice(0, -1); //thuc hien tim ki tu cuoi de xoa cho den het
    setCalc(value);
  }

  return (
    <div className="App">
      <div className="calculator">
        {/* Start Display */}
        <div className="display">
          {calc || "0"}
        </div>
        {/* End Display */}
        <hr />
        {/* Start Button */}
        <div className="button-list">

          <div className="operators">
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>
            <button onClick={() => updateCalc('*')}>x</button>
            <button onClick={() => updateCalc('/')}>:</button>
          </div>

          <div className="number">

            {numberCreate()}
            <button onClick={() => updateCalc('.')}>.</button>
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={deleteNumber}>C</button>
          </div>
        </div>
        <button style={{ width: "100%", borderRadius: "15px", color:"#39C9ED" }} onClick={calculate}>=</button>
        {/* End Button */}

      </div>
    </div>
  );
}

export default App;
