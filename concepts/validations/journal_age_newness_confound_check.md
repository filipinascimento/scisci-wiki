# Journal-age/newness confound check

## Summary

Novelty-JIF penalties should be checked against the possibility that novel papers simply appear in new or young journals.

## Canonical Form

- Unit of analysis: journal, publication year, novelty class, JIF placement model, or new-journal indicator.
- Typical representation: JIF placement regression with journal age and new-journal controls.
- Mechanism, measurement, or validation target: confounding of novelty penalties by journal age or newness.
- Empirical signature: novelty coefficients remain after controlling for journal age and new-journal status..

## Uses in Science of Science

- Adds a robustness layer to [journal impact factor novelty bias](journal_impact_factor_novelty_bias.md).
- Useful when new venues are more receptive to novel combinations.
- Connects journal-pair novelty to journal entity boundaries.

## Operationalization

- Add journal age and new-journal indicators to JIF placement models.
- Report novelty coefficients before and after adjustment.
- Run sensitivity to journal mergers, title changes, and indexing start dates.

## Evidence and Validations

- Verified full-text evidence from Wang et al. (2017) reports that controlling for journal age or new-journal status leaves the negative novelty-JIF association intact.
- This supports journal-age controls as a validation motif.

## Caveats

- Journal age controls do not remove all selection, scope, or field-position confounds.
- Young-journal status can itself be part of the novelty diffusion process.

## Links

- [Journal impact factor novelty bias](journal_impact_factor_novelty_bias.md)
- [Journal impact factor](../measures/journal_impact_factor.md)
- [New journal-pair novelty filter robustness](new_journal_pair_novelty_filter_robustness.md)
- [Journal-pair entity proxy boundary](journal_pair_entity_proxy_boundary.md)
- [Field classifications](../measures/field_classifications.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `journal_age_newness_confound_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Dimensions ID: `pub.1090835595`
- SciSciNet ID: `W3123050710`
- Aliases: journal age novelty confound; new-journal novelty control; novelty JIF age robustness
