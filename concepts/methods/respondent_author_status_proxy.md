# Respondent-author status proxy

## Summary

Respondent-author status proxy assigns project-level status from the surveyed or contact author linked to a focal publication when direct PI status or proposal records are unavailable.

## Canonical Form

- Unit of analysis: publication, project, respondent author, corresponding author, status category, or funding application.
- Typical representation: rank, gender, institution tier, reputation, or career-stage variables attached to the respondent author.
- Method target: infer the status exposure most relevant to project choice, funding review, and conformity pressure.
- Empirical signature: publication-level models use respondent-author status interactions while acknowledging possible misattribution across coauthors.

## Uses in Science of Science

- Supplies status variables for [funding status-interaction tests](../validations/funding_status_interaction_test.md) and [funding model status contingency](../mechanisms/funding_model_status_contingency.md).
- Connects publication-centered surveys such as [project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md) to inequality mechanisms including [gender and race stratification](../mechanisms/gender_race_stratification.md) and [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md).
- Complements broader author-contact designs such as [corresponding-author survey frame](corresponding_author_survey_frame.md).
- Makes status measurement explicit when status is not uniquely defined for a multi-author project.

## Operationalization

- Identify the author who can answer detailed project questions, often the reprint, first, corresponding, or last author.
- Attach survey-reported or administrative status variables to that respondent.
- Use respondent status as a proxy for project status in funding, novelty, or output models.
- Report likely attenuation when a low-status respondent is embedded in a high-status-led project or when block funds are controlled by senior lab members.
- Where possible, compare with PI records, author-position rules, or team-level status measures.

## Evidence and Validations

- Verified full-text evidence from Wang, Lee, and Walsh (2018) uses the status of the responding author as a proxy for status effects on the focal publication.
- The paper operationalizes status through assistant-professor rank, female respondent, and affiliation outside Japan's seven former Imperial universities.
- Wang et al. argue that the respondent is often responsible for the project and that misattribution would likely attenuate the observed status-interaction effects.
- The full text also notes that this proxy can be imperfect when a junior first author collaborates with a senior coauthor or when block funds are controlled within a senior chair unit.

## Caveats

- Respondent status is not identical to PI status, team status, lab head status, or reviewer-perceived applicant status.
- The proxy can confound rank, gender, institution, resources, reputation, and local autonomy.
- Multi-author projects need sensitivity checks because the author who answers the survey may not be the author who controlled funding or project direction.

## Links

- [funding status-interaction test](../validations/funding_status_interaction_test.md)
- [funding model status contingency](../mechanisms/funding_model_status_contingency.md)
- [status conformity pressure](../mechanisms/status_conformity_pressure.md)
- [project funding-source survey linkage](../datasets/project_funding_source_survey_linkage.md)
- [corresponding-author survey frame](corresponding_author_survey_frame.md)
- [gender and race stratification](../mechanisms/gender_race_stratification.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)

## References

- Wang, J., Lee, Y.-N., & Walsh, J. P. (2018). Funding model and creativity in science: Competitive versus block funding and status contingency effects. *Research Policy*, 47(6), 1070-1083. https://doi.org/10.1016/j.respol.2018.03.014 [OpenAlex: W2794465725; Dimensions: pub.1101833101; WoS: unknown]

## Metadata

- Concept ID: `respondent_author_status_proxy`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2018) (2018)
- Latest seen paper: Wang et al. (2018) (2018)
- Primary reference DOI: `10.1016/j.respol.2018.03.014`
- OpenAlex ID: `W2794465725`
- Dimensions ID: `pub.1101833101`
- SciSciNet ID: `W2794465725`
- Aliases: responding-author status; publication respondent status proxy; contact-author status proxy; project status proxy
