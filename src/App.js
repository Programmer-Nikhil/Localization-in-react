import "./styles.css";
import { Trans, useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();
  const name = "Nikhil";

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="App">
      <button onClick={() => changeLanguage("en-US")}>English(US)</button>
      <button onClick={() => changeLanguage("nl")}>Dutch</button>
      <hr />
      <Trans i18nKey="description.part1">
        This is <strong>first</strong> react text
      </Trans>
      <br />
      <div>{t("description.part2")}</div>
      <br />
      <Trans i18nKey="description.part3" name={name}>
        My name is {{ name }}
      </Trans>
    </div>
  );
}
