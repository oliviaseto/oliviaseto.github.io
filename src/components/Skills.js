import React from "react";

const Skills = () => {
    const languagesIcons = [
        "python.svg",
        "java.svg",
        "css.svg",
        "html.svg",
        "typescript.svg",
        "javascript.svg",
        "c.svg",
        "sqlite.svg",
    ];
    
    const frameworksLibrariesIcons = [
        "bootstrap.svg",
        "tailwind_css.svg",
        "django.svg",
        "nextjs.svg",
        "reactjs.svg",
        "junit.svg",
    ];

    const toolsEnvironmentsIcons = [
        "git.svg",
        "github.svg",
        "powershell.svg",
        "vscode.svg",
        "intellij_idea.svg",
        "eclipse.svg",
        "gradle.svg",
        "heroku.svg",
    ];

    const dataAnalysisIcons = [
        "python.svg",
        "r.svg",
        "numpy.svg",
        "pandas.svg",
        "seaborn.svg",
        "stata.svg",
        "rstudio.svg",
        "spyder.svg",
    ];

    const renderSkillSection = (title, icons) => (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {icons.map((icon, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={`/icons/${icon}`}
                  alt={`Skill ${index + 1}`}
                  className="w-12 h-12 mb-2"
                />
              </div>
            ))}
          </div>
        </div>
    );
    
    return (
        <section className="py-8">
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid grid-cols-1">
                    {renderSkillSection("Languages", languagesIcons)}
                    {renderSkillSection("Frameworks and Libraries", frameworksLibrariesIcons)}
                </div>
                <div className="grid grid-cols-1">
                    {renderSkillSection("Tools and Environments", toolsEnvironmentsIcons)}
                    {renderSkillSection("Data Analysis and Visualization", dataAnalysisIcons)}
                </div>
            </div>
        </section>
      );
    };
    
export default Skills;