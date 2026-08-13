# Fixed-effect reputation robustness check

## Summary

Fixed-effect reputation robustness check re-estimates reputation-citation models with fixed effects and alternative reputation measures to test whether the estimated author-reputation channel survives controls for author and period heterogeneity.

## Canonical Form

- Unit of analysis: author-paper-year, paper citation increment, author reputation measure, fixed-effect regression, or citation threshold regime.
- Typical representation: fixed-effect regression comparing reputation and paper-citation coefficients below and above a crossover threshold.
- Validation target: determine whether the reputation effect is robust to secular output growth and unobserved author-level differences.
- Empirical signature: the role switch between author reputation and paper reputation remains after adding fixed effects or replacing cumulative reputation with annual reputation flow.

## Uses in Science of Science

- Validates [reputation effect citation models](../methods/reputation_effect_citation_model.md) before interpreting them as evidence for [reputation effects](../mechanisms/reputation_effects.md).
- Supports [reputation citation premium](../mechanisms/reputation_citation_premium.md) by checking that the premium is not only a cross-sectional artifact.
- Links [cumulative author reputation](../measures/cumulative_author_reputation.md) to alternative non-cumulative reputation measures.
- Complements [citation supply deflators](../methods/citation_supply_deflator.md) by addressing secular citation growth through model controls.

## Operationalization

- Estimate the baseline citation-rate model below and above the citation crossover threshold.
- Add year and author fixed effects where panel structure allows.
- Replace cumulative author citations with annual citation-rate reputation or another non-cumulative signal.
- Check whether the inequalities separating author reputation and paper reputation remain stable.
- Report which field, author sample, and threshold definitions were used.

## Evidence and Validations

- Verified full-text evidence from Petersen et al. (2014) reports that author reputation contributes to citation rate below the crossover threshold while paper reputation dominates above it.
- The paper states that fixed-effect regression in the supplementary appendix reaffirms the distinct roles of publication-specific and author-specific effects above and below the threshold.
- Petersen et al. also use annual citation rate as a non-cumulative reputation measure and apply a multivariate fixed-effect regression that reconfirms the role of reputation in citation dynamics.

## Caveats

- Fixed effects do not solve all confounding from topic choice, journal placement, institutional prestige, or coauthor reputation.
- Alternative annual reputation measures can be noisier than cumulative measures.
- Robustness checks should be reported separately from causal identification claims.

## Links

- [reputation effect citation model](../methods/reputation_effect_citation_model.md)
- [reputation effects](../mechanisms/reputation_effects.md)
- [reputation citation premium](../mechanisms/reputation_citation_premium.md)
- [cumulative author reputation](../measures/cumulative_author_reputation.md)
- [citation crossover threshold](../measures/citation_crossover_threshold.md)
- [citation supply deflator](../methods/citation_supply_deflator.md)
- [multi-source reputation confound](multi_source_reputation_confound.md)

## References

- Petersen, A. M., Fortunato, S., Pan, R. K., Kaski, K., Penner, O., Rungi, A., Riccaboni, M., Stanley, H. E., & Pammolli, F. (2014). Reputation and impact in academic careers. *Proceedings of the National Academy of Sciences*, 111(43), 15316-15321. https://doi.org/10.1073/pnas.1323111111 [OpenAlex: W2152513188; Dimensions: pub.1035836589; WoS: unknown]

## Metadata

- Concept ID: `fixed_effect_reputation_robustness_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Petersen et al. (2014) (2014)
- Latest seen paper: Petersen et al. (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1323111111`
- OpenAlex ID: `W2152513188`
- Dimensions ID: `pub.1035836589`
- SciSciNet ID: `W2152513188`
- Aliases: reputation fixed-effects check; author fixed-effect citation robustness; annual reputation robustness; citation model fixed effects
