import React from "react";

export interface AmountSelectorProps {
  onSelect: (amount: number) => void;
}

export function StackedBoxAmountSelector(props: AmountSelectorProps) {
  return (
    <div className="sfua-donate-subheader">
      <h3>Select amount to donate</h3>
      <div className="sfua-donate-amount-selector">
        <button onClick={() => props.onSelect(50.0)}>$50</button>
        <button onClick={() => props.onSelect(100.0)}>$100</button>
        <button onClick={() => props.onSelect(200.0)}>$200</button>
        <button onClick={() => props.onSelect(500.0)}>$500</button>
      </div>
    </div>
  );
}

export function StackedTextAmountSelector(props: AmountSelectorProps) {
  const amountOptions = [50.0, 100.0, 200.0, 500.0].map((amount) => {
    const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      props.onSelect(amount);
    };
    return (
      <a
        key={`option-${amount}`}
        className="border border-strong-azure hover:bg-strong-azure p-5 md:p-6 mr-[-1px] w-10 md:w-24 text-strong-azure hover:text-white"
        onClick={onClickHandler}
      >
        ${amount.toLocaleString("en-CA")}
      </a>
    );
  });
  return (
    <div className="sfua-donate-form__amount-select my-10">
      <span>{amountOptions}</span>
    </div>
  );
}
