# Nature Index institutional prestige score

## Summary

Nature Index institutional prestige score measures the prestige environment of a junior researcher using institution-level publication counts in a curated set of high-status journals.

## Canonical Form

- Unit of analysis: institution, paper, researcher, early-career window, or discipline.
- Typical representation: institution prestige score, paper-average prestige, or researcher-average prestige.
- Measurement target: institutional prestige exposure in a scientist's early publication environment.
- Empirical signature: junior researchers at high-prestige institutions or with high-prestige coauthor affiliations have larger prestige scores.

## Uses in Science of Science

- Provides a covariate for [matched career counterfactuals](../methods/matched_career_counterfactuals.md) and top-coauthor exposure studies.
- Links [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md) to individual [scientific career impact dynamics](../mechanisms/scientific_career_impact.md).
- Helps separate institutional status from [coauthor prestige exposure](coauthor_prestige_exposure.md).
- Provides a measurable layer for testing whether top-scientist collaboration has stronger benefits for less prestigious institutional environments.

## Operationalization

- Count institution i's publications in the Nature Index journal list for the relevant disciplines and time span.
- Transform the count with a square root, following Li et al.'s implementation.
- Assign a paper-level prestige score as the average score of the authors' institutions.
- Assign a researcher-level prestige score as the average prestige score of the researcher's papers.
- Cross-check the institution ranking against external rankings when possible.

## Evidence and Validations

- Verified full-text evidence from Li, Aste, Caccioli, and Livan (2019) measures the institutional prestige a junior researcher is embedded in using an adjusted Nature Index score.
- The paper defines the institution score as the square root of the number of publications by researchers affiliated with that institution in the Nature Index journal set since 1970.
- Li et al. average institution scores to paper scores and then average paper scores to researcher scores.
- They cross-check this measure against the Leiden ranking and report Kendall correlations of 0.98 for Cell Biology, 0.94 for Chemistry, 0.94 for Neuroscience, and 0.97 for Physics.

## Caveats

- Nature Index journal coverage is selective and field-specific.
- The measure captures prestige and publication concentration, not all forms of institutional support or training quality.
- A prestige score can confound institution, coauthor environment, lab access, and topic opportunity.

## Links

- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [coauthor prestige exposure](coauthor_prestige_exposure.md)
- [early-career sponsorship by top scientists](../mechanisms/early_career_sponsorship.md)
- [early-career excellence strata](../representations/early_career_excellence_strata.md)
- [matched career counterfactuals](../methods/matched_career_counterfactuals.md)
- [four-discipline long-lived career panel](../datasets/four_discipline_long_lived_career_panel.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [responsible metrics](responsible_metrics.md)

## References

- Li, W., Aste, T., Caccioli, F., & Livan, G. (2019). Early coauthorship with top scientists predicts success in academic careers. *Nature Communications*, 10, 5170. https://doi.org/10.1038/s41467-019-13130-4 [OpenAlex: W2949684159; Dimensions: pub.1122584827; WoS: unknown]

## Metadata

- Concept ID: `nature_index_institutional_prestige_score`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Li et al. (2019) (2019)
- Latest seen paper: Li et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-13130-4`
- OpenAlex ID: `W2949684159`
- Dimensions ID: `pub.1122584827`
- SciSciNet ID: `W2949684159`
- Aliases: Nature Index prestige score; institutional prestige exposure; early-career institution prestige; adjusted Nature Index
