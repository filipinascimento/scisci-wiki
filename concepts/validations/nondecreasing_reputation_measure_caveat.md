# Nondecreasing reputation measure caveat

## Summary

Nondecreasing reputation measure caveat is the warning that cumulative citation reputation can only stay flat or rise, so it can miss negative shocks to scientific reputation after invalidated, fraudulent, or retracted work.

## Canonical Form

- Unit of analysis: scientist, cumulative citation count, reputation trajectory, retraction event, or annual reputation measure.
- Typical representation: cumulative reputation caveat, non-cumulative reputation sensitivity, retraction-shock exception, or reputation-decline blind spot.
- Validation target: prevent cumulative citation indicators from being treated as complete measures of reputation.
- Empirical signature: a reputation model using cumulative citations cannot represent downward changes unless paired with annual flows or event-based penalties.

## Uses in Science of Science

- Qualifies [cumulative author reputation](../measures/cumulative_author_reputation.md) and related [reputation effects](../mechanisms/reputation_effects.md).
- Links reputation modeling to [post-retraction citation persistence](../measures/post_retraction_citation_persistence.md) and [retraction cascades](../mechanisms/retraction_cascades.md).
- Supports [responsible metrics](../measures/responsible_metrics.md) by naming a limit of cumulative impact indicators.
- Motivates robustness checks with annual citation rates, recent-window citations, or correction/retraction events.

## Operationalization

- State whether the reputation measure is cumulative, moving-window, annual, or event-adjusted.
- For cumulative measures, explicitly note that reputation decreases cannot be observed directly.
- Add a sensitivity model using annual citation flow or recent-window reputation where possible.
- Flag retractions, expressions of concern, invalidated findings, and misconduct events as cases where cumulative reputation may be misleading.

## Evidence and Validations

- Verified full-text evidence from Petersen et al. (2014) notes that their nondecreasing cumulative reputation measure overlooks the possibility that reputation can significantly decrease.
- The paper names invalidated or fraudulent science as cases where reputation can fall and cites evidence that retractions can negatively affect cumulative-citation growth.
- Petersen et al. respond with a robustness check using annual citation rate as an additional non-cumulative reputation measure.

## Caveats

- Annual reputation measures can be volatile and field-dependent.
- A fall in citation rate is not always reputational damage; it can reflect aging, topic shifts, or publication-volume changes.
- Retraction signals are incomplete and may be unevenly recorded across databases and time.

## Links

- [cumulative author reputation](../measures/cumulative_author_reputation.md)
- [reputation effects](../mechanisms/reputation_effects.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [post-retraction citation persistence](../measures/post_retraction_citation_persistence.md)
- [retraction cascades](../mechanisms/retraction_cascades.md)
- [fixed-effect reputation robustness check](fixed_effect_reputation_robustness_check.md)

## References

- Petersen, A. M., Fortunato, S., Pan, R. K., Kaski, K., Penner, O., Rungi, A., Riccaboni, M., Stanley, H. E., & Pammolli, F. (2014). Reputation and impact in academic careers. *Proceedings of the National Academy of Sciences*, 111(43), 15316-15321. https://doi.org/10.1073/pnas.1323111111 [OpenAlex: W2152513188; Dimensions: pub.1035836589; WoS: unknown]

## Metadata

- Concept ID: `nondecreasing_reputation_measure_caveat`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Petersen et al. (2014) (2014)
- Latest seen paper: Petersen et al. (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1323111111`
- OpenAlex ID: `W2152513188`
- Dimensions ID: `pub.1035836589`
- SciSciNet ID: `W2152513188`
- Aliases: cumulative reputation blind spot; reputation decline caveat; non-cumulative reputation sensitivity; retraction reputation caveat
