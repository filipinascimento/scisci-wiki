# Clinical-trial publication share

## Summary

Clinical-trial publication share is the fraction of a researcher's or cohort's papers that are clinical-trial publications, used as a direct biomedical translation outcome.

## Canonical Form

- Unit of analysis: paper, principal investigator, applicant group, follow-up window, or biomedical portfolio.
- Typical representation: `# clinical trial papers / # papers` by cohort and time window.
- Measurement target: direct contribution to clinical translation rather than only scholarly citation impact.
- Empirical signature: two cohorts with similar publication volume can differ in the share of papers classified as clinical trials.

## Uses in Science of Science

- Extends [hit-paper probability](hit_paper_probability.md) with a non-citation biomedical outcome.
- Adds an outcome layer to [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md) and [survivor-conditioned setback advantage](../validations/survivor_conditioned_setback_advantage.md).
- Depends on [clinical-trial publication linkages](../datasets/clinical_trial_publication_linkages.md) or PubMed/ClinicalTrials.gov-style trial publication identifiers.
- Supports broader [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md) and [research-object context graphs](../representations/research_object_context_graphs.md).

## Operationalization

- Identify publications that are clinical-trial papers using PubMed publication types, NCT-linked records, or curated clinical-trial publication links.
- Assign papers to the scientist, applicant group, grant cohort, or follow-up window under study.
- Compute the clinical-trial paper share among all papers in that denominator.
- Report the denominator explicitly: active scientists only, all initial applicants, papers after a lag, or per-capita outcomes.
- Compare against citation outcomes to test whether a result extends beyond scholarly attention.

## Evidence and Validations

- Verified full-text evidence from Wang, Jones, and Wang (2019) uses clinical-trial publications in PubMed as a direct contribution to clinical translation.
- In their NIH R01 near-threshold cohort, near-miss scientists were 50% more likely than narrow wins to publish a clinical-trial paper over the ten-year follow-up.
- The paper reports clinical-trial paper shares of 4.8% for near misses and 3.2% for narrow wins, with a chi-square test p-value below 0.001 and odds ratio of 1.53.
- Wang et al. repeat the analysis after their conservative attrition-removal procedure and report the same qualitative conclusion.

## Caveats

- Clinical-trial publication status is biomedical and does not transfer directly to non-clinical fields.
- Trial publication types and NCT-linked tables can miss informal translational work, preclinical work, or non-U.S. trial records.
- A clinical-trial publication share measures one direct translation channel, not trial quality, clinical benefit, or patient outcome.

## Links

- [clinical-trial publication linkages](../datasets/clinical_trial_publication_linkages.md)
- [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md)
- [hit-paper probability](hit_paper_probability.md)
- [clinical-trial citation share](clinical_trial_citation_share.md)
- [approximate potential to translate](approximate_potential_to_translate.md)
- [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md)
- [survivor-conditioned setback advantage](../validations/survivor_conditioned_setback_advantage.md)
- [setback-effect robustness grid](../validations/setback_effect_robustness_grid.md)

## References

- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; WoS: unknown]

## Metadata

- Concept ID: `clinical_trial_publication_share`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2019) (2019)
- Latest seen paper: Wang et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-12189-3`
- OpenAlex ID: `W2977412048`
- Dimensions ID: `pub.1121403320`
- SciSciNet ID: `W3099970011`
- Aliases: clinical trial paper share; direct clinical translation share; clinical trial publication outcome; clinical trial paper probability
