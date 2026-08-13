# Approximate potential to translate

## Summary

Approximate potential to translate is a machine-learning score that identifies papers with early signatures of bench-to-bedside translational potential.

## Canonical Form

- Unit of analysis: biomedical paper, MeSH term profile, disease-therapy signal, chemical/drug feature set, citation trajectory, or cohort outcome.
- Typical representation: APT score, translational-potential flag, or share of papers above an APT threshold.
- Measurement target: potential for biomedical research to move toward clinical translation before direct clinical-trial evidence is fully observed.
- Empirical signature: a paper's metadata and early signals predict membership in translational biomedical regions.

## Uses in Science of Science

- Complements direct [clinical-trial publication share](clinical_trial_publication_share.md) and downstream [clinical-trial citation share](clinical_trial_citation_share.md).
- Adds a predictive translational outcome to [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md).
- Links biomedical text/category features to [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md), [paper-field linkages](../representations/paper_field_linkages.md), and [field classifications](field_classifications.md).
- Helps test whether career or funding effects extend beyond citation impact into potential clinical relevance.

## Operationalization

- Construct biomedical feature vectors from MeSH terms, disease terms, therapy terms, chemical/drug terms, and citation-rate features.
- Apply an APT or similar translational-potential model to classify papers as likely to become translational research.
- Aggregate the resulting flags or probabilities by scientist, grant cohort, institution, field, or time window.
- Report model source, training data, snapshot date, and validation target so the score is not treated as a ground-truth clinical outcome.

## Evidence and Validations

- Verified full-text evidence from Wang, Jones, and Wang (2019) uses the approximate potential to translate score to identify papers with potential for bench-to-bedside translation.
- The figure caption states that the score is estimated with machine learning using features such as MeSH terms, disease, therapies, chemical/drug information, and citation rates.
- In the NIH R01 near-threshold cohort, near-miss papers were 24.5% higher in translational potential than narrow-win papers.
- The paper reports APT/translational-potential shares of 35.4% for near misses and 28.4% for narrow wins, with a chi-square test p-value below 0.001 and odds ratio of 1.38.

## Caveats

- APT is a model-based proxy, not an observed clinical outcome.
- The feature set is biomedical and may not generalize to non-biomedical translation domains.
- Model scores can inherit MeSH coverage, citation-rate, disease-taxonomy, and training-label biases.
- Direct clinical-trial links remain useful validation targets for model-based translational potential.

## Links

- [clinical-trial publication share](clinical_trial_publication_share.md)
- [clinical-trial citation share](clinical_trial_citation_share.md)
- [clinical-trial publication linkages](../datasets/clinical_trial_publication_linkages.md)
- [hit-paper probability](hit_paper_probability.md)
- [field classifications](field_classifications.md)
- [citation-informed paper embeddings](../representations/citation_informed_paper_embeddings.md)
- [paper-field linkages](../representations/paper_field_linkages.md)
- [survivor-conditioned setback advantage](../validations/survivor_conditioned_setback_advantage.md)
- [setback-effect robustness grid](../validations/setback_effect_robustness_grid.md)

## References

- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; WoS: unknown]
- Weber, G. M. (2013). Identifying translational science within the triangle of biomedicine. *Journal of Translational Medicine*, 11, 126. https://doi.org/10.1186/1479-5876-11-126 [OpenAlex: unknown; Dimensions: unknown; WoS: unknown]

## Metadata

- Concept ID: `approximate_potential_to_translate`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2019) (2019)
- Latest seen paper: Wang et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-12189-3`
- OpenAlex ID: `W2977412048`
- Dimensions ID: `pub.1121403320`
- SciSciNet ID: `W3099970011`
- Aliases: APT score; translational-potential score; bench-to-bedside potential; approximate potential for translation
