# Scientific-age career-stage bins

## Summary

Scientific-age career-stage bins represent career stage by years since first publication, using explicit cutoffs for junior, early-career, mid-career, and late-career periods.

## Canonical Form

- Unit of analysis: scientist, author-year, author-paper pair, first-publication year, or career-stage interval.
- Typical representation: career-stage label, years-since-first-publication variable, bin cutoff table, or stage-by-role panel.
- Representation target: convert continuous scientific age into comparable career stages for role, productivity, and impact analyses.
- Empirical signature: contribution-role probabilities are aggregated separately within defined scientific-age intervals.

## Uses in Science of Science

- Structures [career-stage contributorship panels](career_stage_contributorship_panel.md).
- Connects role trajectories in [task specialization](../mechanisms/task_specialization.md) to scientific-age measurement.
- Provides a stage variable for [median stage role-probability aggregation](../methods/median_stage_role_probability_aggregation.md).
- Needs sensitivity checks tied to [h-index scientific-age start sensitivity](../validations/h_index_scientific_age_start_sensitivity.md) and [gendered seniority pipeline confound](../validations/gendered_seniority_pipeline_confound.md).

## Operationalization

- Identify each author's first publication year in the indexed corpus.
- Compute years since first publication at each focal paper or observation year.
- Assign stage bins such as junior, early-career, mid-career, and late-career using documented cutoffs.
- Recompute role probabilities, productivity, and persistence measures by stage.
- Test whether alternate start definitions, such as first first-authored paper, change conclusions.

## Evidence and Validations

- Verified full-text evidence from Robinson-Garcia et al. (2020) defines junior researchers as less than 5 years since first publication, early-career as 5 to less than 15 years, mid-career as 15 to less than 30 years, and late-career as 30 or more years.
- The methods section groups publications into those same career-stage intervals before aggregating contribution probabilities.
- The paper notes that first publication year is used as a proxy for researcher age, while alternative approaches such as first first-authored publication could affect results.

## Caveats

- First publication year is an imperfect proxy for training completion, PhD year, or professional seniority.
- Database truncation can make older scientists appear younger when early publications are missing.
- Fixed bins may hide field-specific career timing and non-linear trajectories.

## Links

- [career-stage contributorship panel](career_stage_contributorship_panel.md)
- [task specialization](../mechanisms/task_specialization.md)
- [median stage role-probability aggregation](../methods/median_stage_role_probability_aggregation.md)
- [h-index scientific-age start sensitivity](../validations/h_index_scientific_age_start_sensitivity.md)
- [gendered seniority pipeline confound](../validations/gendered_seniority_pipeline_confound.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)

## References

- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/elife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; SciSciNet: W3097159753; WoS: unknown]

## Metadata

- Concept ID: `scientific_age_career_stage_bins`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Robinson-Garcia et al. (2020) (2020)
- Latest seen paper: Robinson-Garcia et al. (2020) (2020)
- Primary reference DOI: `10.7554/elife.60586`
- OpenAlex ID: `W3097159753`
- Dimensions ID: `pub.1132069903`
- SciSciNet ID: `W3097159753`
- Aliases: scientific-age bins; career-stage cutoffs; years-since-first-publication bins; contributorship career-stage labels
