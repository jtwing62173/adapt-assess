import { Model } from "survey-core";

const assessmentJson = {
  title: "Organizational Agility Assessment",
  completedHtmlOnCondition: [
    {
      expression: "{totalScore} > ({maxScore} / 3 * 2)",
      html: "You got {totalScore} out of {maxScore} points. You did great!",
    },
    {
      expression: "{totalScore} <= ({maxScore} / 3)",
      html: "You got {totalScore} out of {maxScore} points. Come on now, step up!",
    },
    {
      expression: "({maxScore} / 3 * 2) < {totalScore} <= ({maxScore} / 3)",
      html: "You got {totalScore} out of {maxScore} points. Well done!",
    },
  ],
  pages: [
    {
      name: "organizational-agility",
      title: "Organizational Agility Assessment",
      description:
        "Answer the following questions about your organization to discover its readiness for agility transformation.",
      elements: [
        {
          type: "panel",
          name: "deming",
          title: "",
          elements: [
            {
              type: "radiogroup",
              name: "deming",
              title:
                "How familiar is your organization with the work of Dr. W. Edwards Deming, such as 'The 14 Points', 'System of Profound Knowledge', and 'Deadly Diseases of Management'? Rank your organization on a scale of one (1) to five (5), with one being unfamiliar and five being extremely familiar with all of his work.",
              colCount: 5,
              choices: [
                { value: 1, text: "One", score: 0 },
                { value: 2, text: "Two", score: 0 },
                { value: 3, text: "Three", score: 3 },
                { value: 4, text: "Four", score: 4 },
                { value: 5, text: "Five", score: 5 },
              ],
            },
          ],
        },
        {
          type: "panel",
          name: "devops-infrastructure",
          title: "",
          elements: [
            {
              type: "dropdown",
              name: "devops",
              title:
                "Do you currently have any type of automated environment provisioning in place?",
              colCount: 1,
              choices: [
                { value: 1, text: "Yes", score: 5 },
                { value: 2, text: "No", score: 0 },
                { value: 3, text: "Not Sure", score: 1 },
                {
                  value: 4,
                  text: "We have just started experimenting with provisioning tools",
                  score: 3,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default new Model(assessmentJson);
