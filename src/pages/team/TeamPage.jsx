import TopHeader from "~/components/TopHeader";
import Team from "~/components/Team";
import { useTranslation } from "react-i18next";

const TeamPage = () => {
    const {t} = useTranslation();


    return (
        <>
        <TopHeader page={t("Nav.Our Team")} currentPage={t("Nav.Home")}/>
         <Team />
     </>
    );
};

export default TeamPage;