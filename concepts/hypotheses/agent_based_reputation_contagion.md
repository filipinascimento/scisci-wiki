# Agent-based reputation contagion

## Summary

Agent-based reputation contagion is the hypothesis motif that reputation dynamics can diffuse through social recommendation systems as agents use trust and partial information to allocate attention.

## Canonical Form

- Unit of analysis: agent, recommendation event, attention edge, reputation state, citation, or trust relation.
- Typical representation: reputation contagion, recommender-mediated attention, agent-based citation model, or social influence diffusion.
- Hypothesis target: generalize author-reputation effects from citation data to broader social systems of scientific attention.
- Empirical signature: reputation states alter exposure and recommendations, producing cumulative attention even before direct quality signals are abundant.

## Uses in Science of Science

- Extends [search-result reputation reinforcement](../mechanisms/search_result_reputation_reinforcement.md) into a dynamic modeling agenda.
- Links [reputation signal-flow graph](../representations/reputation_signal_flow_graph.md) with [prediction feedback loops](../validations/prediction_feedback_loops.md).
- Provides a bridge between reputation mechanisms and simulation models of attention allocation.

## Operationalization

- Build agent-based models where agents observe partial quality signals and reputation states.
- Simulate recommendation, search, citation, and collaboration events.
- Compare simulated citation distributions, early attention premiums, and inequality patterns with observed data.
- Test interventions such as blinding, randomized exposure, or reputation-signal suppression.

## Evidence and Validations

- Verified full-text evidence from Petersen et al. (2014) discusses reputation, trust, asymmetric information, recommender systems, and contagion-like reputation dynamics in the broader implications section.
- The paper's empirical citation model motivates but does not directly estimate an agent-based contagion model.
- This motif captures a suggested modeling extension.

## Caveats

- The motif is speculative relative to the paper's observed citation-rate estimates.
- Agent rules can generate many patterns unless strongly constrained by data.
- Reputation contagion can conflate social influence, quality learning, and platform ranking effects.

## Links

- [search-result reputation reinforcement](../mechanisms/search_result_reputation_reinforcement.md)
- [prediction feedback loops](../validations/prediction_feedback_loops.md)
- [reputation signal-flow graph](../representations/reputation_signal_flow_graph.md)
- [reputation effects](../mechanisms/reputation_effects.md)

## References

- Petersen, A. M., Fortunato, S., Pan, R. K., Kaski, K., Penner, O., Rungi, A., Riccaboni, M., Stanley, H. E., & Pammolli, F. (2014). Reputation and impact in academic careers. *Proceedings of the National Academy of Sciences*, 111(43), 15316-15321. https://doi.org/10.1073/pnas.1323111111 [OpenAlex: W2152513188; Dimensions: pub.1035836589; WoS: unknown]

## Metadata

- Concept ID: `agent_based_reputation_contagion`
- Category: `hypotheses`
- Status: `full_text_seed`
- First seen paper: Petersen et al. (2014) (2014)
- Latest seen paper: Petersen et al. (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1323111111`
- OpenAlex ID: `W2152513188`
- Dimensions ID: `pub.1035836589`
- SciSciNet ID: `W2152513188`
- Aliases: reputation contagion model; agent-based reputation diffusion; recommender-mediated reputation dynamics
