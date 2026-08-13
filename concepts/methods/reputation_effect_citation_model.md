# Reputation effect citation model

## Summary

Reputation effect citation model estimates annual paper citation increments as a multiplicative function of prior paper citations, publication age, and cumulative author reputation.

## Canonical Form

- Unit of analysis: author-paper-year, paper, scientist, discipline cohort, or publication portfolio.
- Typical representation: multiplicative citation-rate model with paper effect pi, life-cycle effect tau, and reputation effect rho.
- Method target: separate paper-specific cumulative advantage, citation aging, and author reputation spillovers.
- Empirical signature: below a citation threshold, rho is positive and pi is below linear preferential attachment; above the threshold, rho approaches zero and pi approaches one.

## Uses in Science of Science

- Operationalizes [reputation effects](../mechanisms/reputation_effects.md) in annual citation dynamics.
- Provides the estimation machinery behind [reputation citation premium](../mechanisms/reputation_citation_premium.md).
- Uses [cumulative author reputation](../measures/cumulative_author_reputation.md), [citation crossover threshold](../measures/citation_crossover_threshold.md), and paper age in one framework.
- Connects career-level status to paper-level [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md).
- Sits on a [reputation signal-flow graph](../representations/reputation_signal_flow_graph.md) where author-to-paper and paper-to-author feedback channels are made explicit.
- Uses [citation life-cycle half-life](../measures/citation_life_cycle_half_life.md) and related aging measures as empirical context for the life-cycle term.

## Operationalization

- For each paper-year, compute next-year citation increment.
- Include prior cumulative paper citations as the publication citation effect.
- Include publication age through an exponential life-cycle or obsolescence term.
- Include cumulative author citations as the author reputation term.
- Estimate parameters separately below and above the citation crossover threshold.
- Add year and author fixed effects as robustness checks where possible.

## Evidence and Validations

- Verified full-text evidence from Petersen et al. (2014) models citation increments with three features: prior paper citations, publication age or life cycle, and cumulative author reputation.
- The paper parameterizes these components as pi for publication citation effect, tau for life-cycle effect, and rho for author reputation effect.
- Petersen et al. estimate the model below and above field-specific citation crossover thresholds.
- The estimated pattern is rho below the crossover greater than rho above the crossover, while pi below the crossover is less than pi above it.
- Fixed-effect robustness checks reaffirm the distinct roles of paper-specific and author-specific effects above and below the threshold.

## Caveats

- The model assumes the central scientist captures most of the relevant reputation signal, an assumption split out as [central-scientist reputation approximation](../validations/central_scientist_reputation_approximation.md).
- Multiplicative citation-rate models can be sensitive to zero-citation handling, field definitions, and citation-window choices.
- Journal reputation, institution reputation, coauthor reputation, and self-citation may remain entangled with author reputation.

## Links

- [reputation effects](../mechanisms/reputation_effects.md)
- [reputation citation premium](../mechanisms/reputation_citation_premium.md)
- [cumulative author reputation](../measures/cumulative_author_reputation.md)
- [citation crossover threshold](../measures/citation_crossover_threshold.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation trajectory models](citation_trajectory_models.md)
- [reputation Monte Carlo career model](reputation_monte_carlo_career_model.md)
- [highly cited scientist career panel](../datasets/highly_cited_scientist_career_panel.md)
- [reputation signal-flow graph](../representations/reputation_signal_flow_graph.md)
- [citation life-cycle half-life](../measures/citation_life_cycle_half_life.md)
- [central-scientist reputation approximation](../validations/central_scientist_reputation_approximation.md)

## References

- Petersen, A. M., Fortunato, S., Pan, R. K., Kaski, K., Penner, O., Rungi, A., Riccaboni, M., Stanley, H. E., & Pammolli, F. (2014). Reputation and impact in academic careers. *Proceedings of the National Academy of Sciences*, 111(43), 15316-15321. https://doi.org/10.1073/pnas.1323111111 [OpenAlex: W2152513188; Dimensions: pub.1035836589; WoS: unknown]

## Metadata

- Concept ID: `reputation_effect_citation_model`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Petersen et al. (2014) (2014)
- Latest seen paper: Petersen et al. (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1323111111`
- OpenAlex ID: `W2152513188`
- Dimensions ID: `pub.1035836589`
- SciSciNet ID: `W2152513188`
- Aliases: reputation citation regression; author reputation citation model; pi tau rho citation model; status-aware citation-rate model
