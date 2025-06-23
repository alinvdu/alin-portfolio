import { IoIosInformationCircleOutline } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import { IoLinkOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

function Element({ image, styles, title, description, skills, interactionText, watchMoreLink, visitLink, githubLink, hasBorder, width }) {
  return (
    <div style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        ...styles
    }}>
        <div style={{
            display: "flex",
            flexDirection: "column",
            paddingBottom: 75,
            marginBottom: hasBorder && 45,
            borderBottom: hasBorder && '1px solid rgba(255, 255, 255, 0.15)',
        }}>
            <div style={{
                fontSize: 25,
                marginBottom: 35,
                letterSpacing: 0.5,
                textAlign: width < 800 ? "center" : "left"
            }}>
                {title}
            </div>
            <div style={{
                display: "flex",
                flexDirection: width < 800 ? "column" : "row"
            }}>
                <div style={{
                    minWidth: width < 550 ? 300 : width < 960 && width > 800 ? 320 : 500,
                    maxWidth: width < 550 ? 300 : width < 960 && width > 800 ? 320 : 500,
                    borderRadius: 15,
                    border: "7px solid rgba(255, 255, 255, 0.15)",
                    overflow: "hidden",
                    alignSelf: width < 800 ? "center" : "flex-start",
                    display: "flex"
                }}>
                <img src={image} alt="Element" style={{
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: 8
                }} />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <div style={{
                        marginLeft: width < 800 ? 0 : 15,
                        display: "flex",
                        marginTop: width < 800 ? 25 : 0,
                        flexDirection: "column",
                        justifyContent: width < 800 ? "center" : "flex-start",
                        alignItems: width < 800 ? "center" : "flex-start",
                        textAlign: width < 800 ? "center" : "left",
                        paddingLeft: 15,
                        borderLeft: width < 800 ? "none" : '1px dotted rgba(255, 255, 255, 0.45)',
                    }}>
                        <div style={{
                        }}>
                            <div style={{
                                fontWeight: 300,
                                letterSpacing: 0.8
                            }}>{description}</div>
                        </div>
                        <div style={{
                            marginTop: 25
                        }}>
                            <div style={{
                                fontWeight: 500,
                                fontSize: 17
                            }}>
                                Skills
                            </div>
                            <div style={{
                                marginTop: 8,
                                fontWeight: 200,
                                display: "flex",
                                flexWrap: "wrap"
                            }}>
                                {skills.map(skill => <div style={{
                                    padding: "6px 8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    border: '1px solid rgba(255, 255, 255, 0.65)',
                                    marginRight: 5,
                                    borderRadius: 5,
                                    fontSize: 15,
                                    whiteSpace: "nowrap",
                                    marginBottom: 5
                                }}>
                                    {skill}
                                </div>)}
                            </div>
                        </div>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: width < 800 ? "center" : "flex-start",
                        marginLeft: 30,
                        marginTop: 30,
                        flexWrap: "wrap"
                    }}>
                        {watchMoreLink && <div onClick={() => {
                            window.open(watchMoreLink, "_blank")
                        }} style={{padding: "8px 12px", fontSize: 15, marginBottom: 5, marginRight: 10, whiteSpace: "nowrap", cursor: 'pointer', borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255, 255, 255, 0.65)", alignSelf: "flex-start"}}>
                            <FiEye style={{
                                fontSize: 19,
                                marginRight: 8
                            }} />
                            <span>Demo</span>
                        </div>}
                        {visitLink && <div onClick={() => {
                            window.open(visitLink, "_blank")
                        }} style={{padding: "8px 12px", marginRight: 10, marginBottom: 5, fontSize: 15, whiteSpace: "nowrap", cursor: 'pointer', borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255, 255, 255, 0.65)", alignSelf: "flex-start"}}>
                            <IoLinkOutline style={{
                                fontSize: 20,
                                marginRight: 8
                            }} />
                            <span>Visit App</span>
                        </div>}
                         {githubLink && <div onClick={() => {
                            window.open(githubLink, "_blank")
                         }} style={{padding: "8px 12px", marginRight: 10, marginBottom: 5, fontSize: 15, whiteSpace: "nowrap", marginRight: 10, cursor: 'pointer', borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255, 255, 255, 0.65)", alignSelf: "flex-start"}}>
                            <FaGithub style={{
                                fontSize: 18,
                                marginRight: 8
                            }} />
                            <span>GitHub</span>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Element;
