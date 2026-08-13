# Q collaborator-omission robustness

## Summary

Q collaborator-omission robustness tests whether a scientist's inferred Q parameter remains stable when individual collaborators are omitted from the career-impact model.

## Canonical Form

- Unit of analysis: scientist, collaborator, coauthored paper, Q estimate, career-impact model, or omission experiment.
- Typical representation: leave-one-collaborator-out Q estimates, Q rank correlation, parameter perturbation, or collaborator-specific sensitivity profile.
- Validation target: determine whether Q is a persistent individual-level impact parameter rather than an artifact of one influential coauthor.
- Empirical signature: omitting individual collaborators changes some paper outcomes but has limited influence on the scientist's inferred Q.

## Uses in Science of Science

- Adds a collaborator-specific robustness layer to the [individual Q parameter](../measures/individual_q_parameter.md).
- Complements broader [career-impact authorship-credit robustness](career_impact_authorship_credit_robustness.md), which checks credit-allocation rules rather than leave-collaborator-out sensitivity.
- Links Q-model prediction to [coauthorship networks](../representations/coauthorship_networks.md), [coauthor prestige exposure](../measures/coauthor_prestige_exposure.md), and [collective credit allocation](../measures/collective_credit_allocation.md).
- Provides a caution for responsible use of [Q-model career impact prediction](../methods/q_model_career_prediction.md): collaboration can modulate individual papers even if the aggregate Q estimate is stable.

## Operationalization

- Estimate each scientist's Q parameter on the full publication record.
- Remove papers or credit contributions associated with one collaborator at a time, following the study's coauthorship and credit-allocation definitions.
- Re-estimate Q under each omission and compare shifts in Q value, rank, and predictive performance.
- Report results by team-size regime, field, career length, and collaborator prominence where possible.

## Evidence and Validations

- Verified full-text evidence from Sinatra et al. (2016) notes that high-impact discoveries often involve collaborators with different Q values.
- The paper first repeats the Q-model analysis with a credit-allocation algorithm that assigns different impact shares to coauthors.
- Sinatra et al. then report that Q is robust to omission of individual collaborators, implying that single collaborators have limited influence on the inferred career-level Q.
- The same discussion preserves a distinction between paper-level collaboration effects and the more stable author-level Q estimate.

## Caveats

- Robustness to individual omissions does not rule out field-wide collaboration advantages, institutional visibility, or repeated access to elite teams.
- Leave-one-collaborator-out tests depend on author disambiguation and the rule used to associate papers with collaborators.
- Q remains citation-derived and can absorb social position, topic choice, venue, and database coverage.

## Links

- [individual Q parameter](../measures/individual_q_parameter.md)
- [Q-model career impact prediction](../methods/q_model_career_prediction.md)
- [career-impact authorship-credit robustness](career_impact_authorship_credit_robustness.md)
- [collective credit allocation](../measures/collective_credit_allocation.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [coauthor prestige exposure](../measures/coauthor_prestige_exposure.md)
- [author contribution statements](../datasets/author_contribution_statements.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; SciSciNet: W2547045893; WoS: unknown]

## Metadata

- Concept ID: `q_collaborator_omission_robustness`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Sinatra et al. (2016) (2016)
- Latest seen paper: Sinatra et al. (2016) (2016)
- Primary reference DOI: `10.1126/science.aaf5239`
- OpenAlex ID: `W2547045893`
- Dimensions ID: `pub.1044965176`
- SciSciNet ID: `W2547045893`
- Aliases: leave-one-collaborator-out Q; Q coauthor omission check; collaborator sensitivity of Q; Q collaborator robustness
