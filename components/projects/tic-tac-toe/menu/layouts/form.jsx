import { TimeIcon } from "../../icons/icon-time";
import { UsersIcon } from "../../icons/icon-users";
import { UiButton } from "../../uikit/ui-bitton";

export const Form = ({ isVisible, isButtonDisable, onFormChange, onFormSubmit, toggleMenu }) => {
  if (!isVisible) return null;

  return (
    <form
      onChange={onFormChange}
      onSubmit={(e) => {
        onFormSubmit(e);
        toggleMenu();
      }}
      className="grid gap-3 px-5"
    >
      <h4 className="text-xl font-medium text-textLg">Number of players</h4>
      <div className="flex gap-5">
        <RadioPeople value="2" id="two-people" iconCount={2} />
        <RadioPeople value="4" id="four-people" iconCount={4} />
      </div>
      <h4 className="text-xl font-medium text-textLg">Turn time</h4>
      <div className="flex gap-5">
        <RadioTime value="smTime" id="sm-time" time="30s" />
        <RadioTime value="mdTime" id="md-time" time="60s" />
        <RadioTime value="lgTime" id="lg-time" time="120s" />
      </div>
      <h4 className="text-xl font-medium text-textLg">Winning line</h4>
      <div className="flex gap-5">
        <RadioSequence value="smSequence" id="sm-sequence" text="3 in a row" />
        <RadioSequence value="mdSequence" id="md-sequence" text="5 in a row" />
      </div>
      <UiButton size="md" type={isButtonDisable ? "disabled" : "primary"} className="w-fit ml-auto mt-3">
        New Game
      </UiButton>
    </form>
  );
};

const RadioPeople = ({ value, id, iconCount }) => {
  const renderIcons = (count) => {
    return Array.from({ length: count }).map((_, index) => <UsersIcon key={index} className="w-5 h-5" />);
  };

  return (
    <div>
      <input
        value={value}
        id={id}
        name="numberOfPeople"
        className="peer absolute h-0 w-0 opacity-0 z-[-1]"
        type="radio"
      />
      <label
        htmlFor={id}
        className="
        h-[40px] px-2 rounded
        flex justify-center items-center gap-2 
        cursor-pointer text-textMd
        border-2 border-options 
        peer-checked:bg-[rgba(255,_255,_255,_0.12)] peer-checked:text-[rgb(187,_134,_252)]"
      >
        {renderIcons(iconCount)}
      </label>
    </div>
  );
};

const RadioTime = ({ value, id, time }) => {
  return (
    <div>
      <input value={value} id={id} name="time" className="peer absolute h-0 w-0 opacity-0 z-[-1]" type="radio" />
      <label
        htmlFor={id}
        className="
        h-[40px] px-2 rounded
        flex justify-center items-center gap-2 
        cursor-pointer text-textMd
        border-2 border-options 
        peer-checked:bg-[rgba(255,_255,_255,_0.12)] peer-checked:text-[rgb(187,_134,_252)]"
      >
        <TimeIcon className="w-5 h-5" />
        {time}
      </label>
    </div>
  );
};

const RadioSequence = ({ value, id, text }) => {
  return (
    <div>
      <input value={value} id={id} name="sequence" className="peer absolute h-0 w-0 opacity-0 z-[-1]" type="radio" />
      <label
        htmlFor={id}
        className="
        h-[40px] px-2 rounded
        flex justify-center items-center gap-2 
        cursor-pointer text-textMd
        border-2 border-options 
        peer-checked:bg-[rgba(255,_255,_255,_0.12)] peer-checked:text-[rgb(187,_134,_252)]"
      >
        {text}
      </label>
    </div>
  );
};
