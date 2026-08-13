# Reputation citation premium

## Summary

Reputation citation premium is the extra early citation rate a paper can receive because its author already has high cumulative reputation.

## Canonical Form

- Unit of analysis: author-paper pair, citation year, scientist, publication portfolio, or discipline cohort.
- Typical representation: multiplicative citation-rate premium associated with author reputation below a citation threshold.
- Mechanism: author reputation acts as a visibility and trust signal when a paper's own quality or impact is still uncertain.
- Empirical signature: low-cited or young papers receive higher annual citation increments when written by authors with higher cumulative citations, after controlling for prior paper citations and paper age.

## Uses in Science of Science

- Provides a mechanism-level refinement of [reputation effects](reputation_effects.md).
- Explains how [cumulative advantage](cumulative_advantage.md) can operate before a paper has enough citations to carry its own reputation.
- Links [cumulative author reputation](../measures/cumulative_author_reputation.md) to [citation crossover threshold](../measures/citation_crossover_threshold.md).
- Raises responsible-metrics concerns because early citation rates may reflect author status rather than paper-specific impact.

## Operationalization

- Estimate a citation-rate model with prior paper citations, publication age, and author reputation.
- Restrict or stratify estimates to papers below the citation crossover threshold.
- Interpret the reputation parameter rho as the elasticity of citation rate with respect to cumulative author reputation.
- Compare the premium below and above the crossover threshold.
- Test whether the premium persists under author and year fixed effects.

## Evidence and Validations

- Verified full-text evidence from Petersen et al. (2014) estimates that, in the reputation regime, a tenfold difference in cumulative author citations corresponds to about a 66 percent citation-rate increase for physicist papers.
- The paper reports a robust role switch: reputation matters below the citation crossover, while prior paper citations dominate above it.
- Petersen et al. find that rho is approximately zero above the crossover, meaning author reputation makes negligible contribution to high-citation papers' later rates.
- The paper interprets this as a micro-level mechanism by which papers can be boosted toward a tipping point, after which paper reputation sustains citation accrual.

## Caveats

- Reputation premium is not evidence that the paper is better; it is a reception mechanism.
- The premium can be confounded by journal prestige, institutional affiliation, coauthor reputation, topic choice, and self-citation.
- A premium estimated among highly cited scientists may be an upper bound relative to the broader population.

## Links

- [reputation effects](reputation_effects.md)
- [cumulative author reputation](../measures/cumulative_author_reputation.md)
- [citation crossover threshold](../measures/citation_crossover_threshold.md)
- [reputation effect citation model](../methods/reputation_effect_citation_model.md)
- [cumulative advantage](cumulative_advantage.md)
- [matthew effect](matthew_effect.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)

## References

- Petersen, A. M., Fortunato, S., Pan, R. K., Kaski, K., Penner, O., Rungi, A., Riccaboni, M., Stanley, H. E., & Pammolli, F. (2014). Reputation and impact in academic careers. *Proceedings of the National Academy of Sciences*, 111(43), 15316-15321. https://doi.org/10.1073/pnas.1323111111 [OpenAlex: W2152513188; Dimensions: pub.1035836589; WoS: unknown]

## Metadata

- Concept ID: `reputation_citation_premium`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Petersen et al. (2014) (2014)
- Latest seen paper: Petersen et al. (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1323111111`
- OpenAlex ID: `W2152513188`
- Dimensions ID: `pub.1035836589`
- SciSciNet ID: `W2152513188`
- Aliases: author reputation premium; citation reputation boost; status citation premium; early citation status effect
