# Multi-source reputation confound

## Summary

Multi-source reputation confound is the threat that estimated author-reputation effects combine focal-author status with institution, journal, coauthor, mentor, or venue reputation signals that are hard to disentangle.

## Canonical Form

- Unit of analysis: author, paper, institution, journal, coauthor team, citation event, or evaluation decision.
- Typical representation: omitted reputation-source caveat, multi-prestige confounding diagram, or sensitivity model with additional prestige controls.
- Validation target: prevent a single author-reputation coefficient from being overinterpreted as a pure focal-author effect.
- Empirical signature: author-reputation estimates shrink, shift, or become heterogeneous after adding institutional, venue, coauthor, or journal-status variables.

## Uses in Science of Science

- Qualifies [reputation effect citation models](../methods/reputation_effect_citation_model.md) and [reputation citation premium](../mechanisms/reputation_citation_premium.md).
- Complements [central-scientist reputation approximation](central_scientist_reputation_approximation.md) by naming non-focal reputation channels.
- Connects [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md), coauthor status, and venue status to citation dynamics.
- Supports [visibility-adjusted citation assessment](../methods/visibility_adjusted_citation_assessment.md) and [responsible metrics](../measures/responsible_metrics.md).

## Operationalization

- List which reputation sources are observed and which are omitted.
- Add controls or stratification for institution prestige, journal venue, coauthor reputation, team seniority, and prior topic visibility where possible.
- Compare focal-author reputation estimates before and after adding each source.
- Treat remaining author-reputation effects as status mixtures unless the design separates these channels.

## Evidence and Validations

- Verified full-text evidence from Petersen et al. (2014) estimates author reputation with cumulative citations but notes that institutional affiliation and journal reputation likely also play a role in citation dynamics.
- The authors state that disentangling interactions among multiple reputation sources remains challenging and an open research direction.
- This caveat is especially relevant because the same paper models citation dynamics through a focal central-scientist reputation channel.

## Caveats

- Some reputation sources are mediators rather than confounders, so adjustment choices should match the causal question.
- Journal and institutional prestige can be endogenous to author reputation and paper quality.
- Coauthor reputation may be unavailable or expensive to compute at scale.

## Links

- [reputation effect citation model](../methods/reputation_effect_citation_model.md)
- [reputation citation premium](../mechanisms/reputation_citation_premium.md)
- [reputation effects](../mechanisms/reputation_effects.md)
- [central-scientist reputation approximation](central_scientist_reputation_approximation.md)
- [visibility-adjusted citation assessment](../methods/visibility_adjusted_citation_assessment.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Petersen, A. M., Fortunato, S., Pan, R. K., Kaski, K., Penner, O., Rungi, A., Riccaboni, M., Stanley, H. E., & Pammolli, F. (2014). Reputation and impact in academic careers. *Proceedings of the National Academy of Sciences*, 111(43), 15316-15321. https://doi.org/10.1073/pnas.1323111111 [OpenAlex: W2152513188; Dimensions: pub.1035836589; WoS: unknown]

## Metadata

- Concept ID: `multi_source_reputation_confound`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Petersen et al. (2014) (2014)
- Latest seen paper: Petersen et al. (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1323111111`
- OpenAlex ID: `W2152513188`
- Dimensions ID: `pub.1035836589`
- SciSciNet ID: `W2152513188`
- Aliases: multiple reputation sources; prestige-source confounding; author journal institution reputation confound; mixed reputation signal
