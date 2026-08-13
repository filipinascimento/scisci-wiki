# Junior NIH R01 near-threshold panel

## Summary

Junior NIH R01 near-threshold panel is a linked administrative and publication dataset of early-career R01 applicants whose first NIH applications fell just above or below a funding threshold.

## Canonical Form

- Unit of analysis: junior PI, R01 application, normalized review score, award decision, publication, citation outcome, funding history, or active-status outcome.
- Typical representation: applicant-level panel with near-miss and narrow-win labels, pre-treatment covariates, grant funding, publications, citations, and attrition over follow-up windows.
- Measurement target: long-run career consequences of an early funding setback under a local threshold design.
- Empirical signature: applicants close to the payline are similar before treatment but differ in initial funding and subsequent outcomes.

## Uses in Science of Science

- Supplies the data layer for [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md).
- Specializes the broader [NIH IMPAC R01 grant panel](nih_impac_r01_grant_panel.md) for a near-threshold junior-PI design.
- Supports [near-miss and narrow-win applicant groups](../measures/near_miss_narrow_win_applicant_groups.md), [hit-paper probability](../measures/hit_paper_probability.md), [early-career setback attrition](../mechanisms/early_career_setback_attrition.md), and [fuzzy funding-threshold regression discontinuity](../methods/fuzzy_funding_threshold_regression_discontinuity.md).
- Links NIH administrative records with [Web of Science](web_of_science.md), PubMed, [Dimensions](dimensions.md), and grant-publication traces.
- Provides a policy-facing dataset for [SciSci quasi-experimental policy evaluation](../validations/scisci_quasi_experimental_policy_evaluation.md).

## Operationalization

- Identify junior PIs whose first NIH R01 application occurred within a short early-career window.
- Normalize application scores relative to the funding threshold or payline.
- Restrict to a close score band around the threshold.
- Attach pre-treatment covariates such as gender, career age, institution reputation, prior R01 applications, prior publications, prior hit papers, normalized citations, and team size.
- Track future publications, citations, R01 applications or awards, NIH-system activity, and alternative funding.

## Evidence and Validations

- Verified full-text evidence from Wang, Jones, and Wang (2019) combines NIH grant data with Web of Science publication and citation records for junior R01 applicants from 1990 to 2005.
- The paper focuses on principal investigators whose first NIH application was within the previous three years.
- Wang et al. restrict the main comparison to normalized scores in the range from -5 to 5 around the funding threshold.
- The resulting near-threshold sample contains 561 narrow wins and 623 near misses.
- The authors also use PubMed, Dimensions, NSF funding histories, and de-identified reproduction data while noting that raw NIH data are restricted under privacy rules.

## Caveats

- The panel covers a local near-threshold sample, not all R01 applicants.
- Raw NIH administrative data are restricted; public reproduction depends on de-identified outputs and code.
- The design is specific to NIH R01 biomedical funding and may not generalize to other funders or countries.
- Name matching, publication linkage, and field classification affect outcome measurement.

## Links

- [NIH IMPAC R01 grant panel](nih_impac_r01_grant_panel.md)
- [near-miss and narrow-win applicant groups](../measures/near_miss_narrow_win_applicant_groups.md)
- [hit-paper probability](../measures/hit_paper_probability.md)
- [early-career setback attrition](../mechanisms/early_career_setback_attrition.md)
- [survivor-conditioned setback advantage](../validations/survivor_conditioned_setback_advantage.md)
- [fuzzy funding-threshold regression discontinuity](../methods/fuzzy_funding_threshold_regression_discontinuity.md)
- [coarsened exact matching career comparison](../methods/coarsened_exact_matching_career_comparison.md)
- [setback screening-effect check](../validations/setback_screening_effect_check.md)
- [setback-effect robustness grid](../validations/setback_effect_robustness_grid.md)
- [Web of Science](web_of_science.md)
- [Dimensions](dimensions.md)

## References

- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; WoS: unknown]

## Metadata

- Concept ID: `junior_nih_r01_near_threshold_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2019) (2019)
- Latest seen paper: Wang et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-12189-3`
- OpenAlex ID: `W2977412048`
- Dimensions ID: `pub.1121403320`
- SciSciNet ID: `W3099970011`
- Aliases: NIH R01 near-threshold panel; junior PI setback panel; R01 near-miss panel; early-career funding cutoff panel
