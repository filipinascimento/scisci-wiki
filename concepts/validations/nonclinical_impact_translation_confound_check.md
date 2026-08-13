# Nonclinical impact-translation confound check

## Summary

Nonclinical impact-translation confound check tests whether a citation or impact advantage is merely caused by one group producing more clinical or translational research.

## Canonical Form

- Unit of analysis: paper, clinical-trial paper, nonclinical paper, citation outcome, translational outcome, or subgroup comparison.
- Typical representation: clinical and nonclinical split plus comparison of impact metrics within the nonclinical subset.
- Validation target: separate general research impact from clinical-composition effects.
- Empirical signature: the focal group retains an impact advantage among nonclinical papers after translational outputs are removed.

## Uses in Science of Science

- Validates the translation outcomes in [clinical-trial publication share](../measures/clinical_trial_publication_share.md), [clinical-trial citation share](../measures/clinical_trial_citation_share.md), and [approximate potential to translate](../measures/approximate_potential_to_translate.md).
- Strengthens [survivor-conditioned setback advantage](survivor_conditioned_setback_advantage.md) by checking whether citation gains are only clinical-topic gains.
- Provides a reusable confound check for biomedical career and funding studies.

## Operationalization

- Classify outputs into clinical-trial papers, papers cited by clinical trials, translational-potential papers, and nonclinical papers.
- Compare the main citation or hit-paper outcome after excluding clinical-trial papers.
- Report whether translational-output differences and nonclinical-impact differences point in the same direction.
- Interpret remaining differences as broader than clinical composition, while still field-normalizing citations.

## Evidence and Validations

- Verified full-text evidence from Wang, Jones, and Wang (2019) shows that near misses outperform narrow wins on clinical-trial publication share, clinical-trial citation share, and approximate translational potential.
- The paper also evaluates hit-paper probability after excluding clinical-trial papers.
- Wang et al. report that the near-miss advantage persists beyond clinical-trial papers, indicating that the citation gap is not only a clinical-composition artifact.

## Caveats

- Clinical-trial indicators are imperfect proxies for translation and miss nontrial societal or technological impact.
- Excluding clinical papers can change field composition and sample size.
- Biomedical translation checks may not generalize to nonclinical domains.

## Links

- [clinical-trial publication share](../measures/clinical_trial_publication_share.md)
- [clinical-trial citation share](../measures/clinical_trial_citation_share.md)
- [approximate potential to translate](../measures/approximate_potential_to_translate.md)
- [survivor-conditioned setback advantage](survivor_conditioned_setback_advantage.md)
- [early-career setback and resilience](../mechanisms/early_career_setback_resilience.md)

## References

- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; SciSciNet: W3099970011; WoS: unknown]

## Metadata

- Concept ID: `nonclinical_impact_translation_confound_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2019) (2019)
- Latest seen paper: Wang et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-12189-3`
- OpenAlex ID: `W2977412048`
- Dimensions ID: `pub.1121403320`
- SciSciNet ID: `W3099970011`
- Aliases: clinical-composition confound check; nonclinical citation robustness; translational impact confound audit; clinical trial exclusion check
