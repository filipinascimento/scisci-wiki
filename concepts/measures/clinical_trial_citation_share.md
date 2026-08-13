# Clinical-trial citation share

## Summary

Clinical-trial citation share is the fraction of papers that are cited by at least one clinical-trial publication, used as an indirect biomedical translation outcome.

## Canonical Form

- Unit of analysis: paper, researcher portfolio, applicant group, citation edge, clinical-trial paper, or follow-up window.
- Typical representation: `# papers cited by clinical trials / # papers`.
- Measurement target: indirect contribution to clinical translation through later trial publications that cite the scientific work.
- Empirical signature: papers may have similar scholarly citation impact but different reach into clinical-trial literature.

## Uses in Science of Science

- Converts [clinical-trial publication linkages](../datasets/clinical_trial_publication_linkages.md) into an outcome measure.
- Extends [survivor-conditioned setback advantage](../validations/survivor_conditioned_setback_advantage.md) beyond standard citation metrics.
- Complements direct [clinical-trial publication share](clinical_trial_publication_share.md) and predictive [approximate potential to translate](approximate_potential_to_translate.md).
- Provides a downstream-use layer for [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md) and [research-object context graphs](../representations/research_object_context_graphs.md).

## Operationalization

- Build or use a link table connecting scientific papers to clinical-trial publications that cite them.
- Mark each focal paper as clinically cited if at least one clinical-trial publication cites it.
- Divide clinically cited focal papers by all focal papers in the cohort and follow-up window.
- Keep this outcome separate from ordinary citation counts because trial citations have different selection and timing processes.
- Report whether links come from PubMed, ClinicalTrials.gov/AACT, Dimensions, SciSciNet, or another source snapshot.

## Evidence and Validations

- Verified full-text evidence from Wang, Jones, and Wang (2019) measures whether a paper is cited by at least one clinical-trial publication as an indirect contribution to clinical translation.
- In the NIH R01 near-threshold cohort, near-miss publications were 19.6% more likely than narrow-win publications to be cited by clinical trials.
- The paper reports clinical-trial citation shares of 34.0% for near misses and 28.4% for narrow wins, with a chi-square test p-value below 0.001 and odds ratio of 1.30.
- Wang et al. report the same qualitative conclusion after their conservative attrition-removal procedure.

## Caveats

- Clinical-trial citations can cite background science, methods, prior trial reports, or related evidence, so the edge role should be audited where possible.
- Trial citation coverage is biomedical, database-specific, and sensitive to PMID/NCT matching.
- Citation by a clinical-trial publication indicates translational reach, not necessarily clinical efficacy or implementation.

## Links

- [clinical-trial publication linkages](../datasets/clinical_trial_publication_linkages.md)
- [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md)
- [clinical-trial publication share](clinical_trial_publication_share.md)
- [approximate potential to translate](approximate_potential_to_translate.md)
- [hit-paper probability](hit_paper_probability.md)
- [survivor-conditioned setback advantage](../validations/survivor_conditioned_setback_advantage.md)
- [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md)
- [multiplex scholarly graphs](../representations/multiplex_scholarly_graphs.md)

## References

- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; WoS: unknown]

## Metadata

- Concept ID: `clinical_trial_citation_share`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2019) (2019)
- Latest seen paper: Wang et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-12189-3`
- OpenAlex ID: `W2977412048`
- Dimensions ID: `pub.1121403320`
- SciSciNet ID: `W3099970011`
- Aliases: clinical trial citation reach; papers cited by clinical trials; indirect clinical translation share; clinical-trial cited paper share
