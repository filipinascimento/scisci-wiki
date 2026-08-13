# Near-miss and narrow-win applicant groups

## Summary

Near-miss and narrow-win applicant groups classify grant applicants just below and just above a funding threshold so their later careers can be compared under local near-threshold conditions.

## Canonical Form

- Unit of analysis: applicant, application, normalized score, funding threshold, award decision, or follow-up cohort.
- Typical representation: binary near-miss versus narrow-win label, score-band restriction, balance table, and treatment-status contrast.
- Measurement target: local treatment contrast between barely unfunded and barely funded applicants.
- Empirical signature: near-threshold groups are similar before treatment but differ sharply in immediate funding probability.

## Uses in Science of Science

- Forms the core comparison for [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md).
- Provides the applicant grouping used in [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md).
- Feeds [hit-paper probability](hit_paper_probability.md), [early-career setback attrition](../mechanisms/early_career_setback_attrition.md), and [survivor-conditioned setback advantage](../validations/survivor_conditioned_setback_advantage.md).
- Depends on a score scale such as [NIH peer-review percentile score](nih_peer_review_percentile_score.md).
- Helps separate score proximity from funding receipt in [fuzzy funding-threshold regression discontinuity](../methods/fuzzy_funding_threshold_regression_discontinuity.md).

## Operationalization

- Normalize grant-review scores around a payline or funding threshold.
- Define a close bandwidth around the threshold.
- Label applicants just above the funding threshold as narrow wins and those just below it as near misses.
- Compare pre-treatment characteristics to test local balance.
- Use the labels as comparison groups or as threshold-side instruments in regression discontinuity designs.

## Evidence and Validations

- Verified full-text evidence from Wang, Jones, and Wang (2019) compares junior NIH R01 applicants whose normalized scores fall from -5 to 5 around the funding threshold.
- The paper reports 561 narrow-win applicants and 623 near-miss applicants in the main sample.
- Wang et al. compare 11 pre-treatment demographic and performance characteristics, including gender, career age, institution reputation, prior R01 applications, prior publications, prior hit papers, hit-paper probability, citations, field-normalized citations, and team size.
- The full text reports no significant pre-treatment differences across the measured dimensions, while award status differs sharply.

## Caveats

- The label is local to a particular funder, scoring system, year, and bandwidth.
- Near-threshold balance on observed variables does not prove balance on unobserved variables.
- Applicants can later receive other grants, resubmit, or leave the NIH system, so the label is an initial setback or win rather than a permanent state.
- Score normalization and threshold reconstruction must be documented.

## Links

- [junior NIH R01 near-threshold panel](../datasets/junior_nih_r01_near_threshold_panel.md)
- [funding threshold quasi-experiments](../methods/funding_threshold_quasi_experiments.md)
- [fuzzy funding-threshold regression discontinuity](../methods/fuzzy_funding_threshold_regression_discontinuity.md)
- [coarsened exact matching career comparison](../methods/coarsened_exact_matching_career_comparison.md)
- [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md)
- [NIH peer-review percentile score](nih_peer_review_percentile_score.md)
- [hit-paper probability](hit_paper_probability.md)
- [early-career setback attrition](../mechanisms/early_career_setback_attrition.md)
- [setback screening-effect check](../validations/setback_screening_effect_check.md)

## References

- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; WoS: unknown]

## Metadata

- Concept ID: `near_miss_narrow_win_applicant_groups`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2019) (2019)
- Latest seen paper: Wang et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-12189-3`
- OpenAlex ID: `W2977412048`
- Dimensions ID: `pub.1121403320`
- SciSciNet ID: `W3099970011`
- Aliases: near-miss applicants; narrow-win applicants; grant cutoff groups; barely funded and barely unfunded applicants
