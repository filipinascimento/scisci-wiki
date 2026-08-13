# Career-impact authorship-credit robustness

## Summary

Career-impact authorship-credit robustness tests whether career-impact timing findings hold when multi-author papers are credited under different authorship allocation rules.

## Canonical Form

- Unit of analysis: scientist, multi-author paper, authorship-credit rule, publication sequence, impact measure, or robustness sample.
- Typical representation: full-count impact, fractional-count impact, team-excluded sample, or author-position-adjusted impact.
- Validation target: determine whether career-impact timing patterns are artifacts of coauthored papers and credit allocation.
- Empirical signature: random-impact timing and pre/post-peak stationarity remain similar under solo-only, uniform, and uneven coauthor-credit rules.

## Uses in Science of Science

- Adds a collaboration-aware robustness layer to [random impact rule](../mechanisms/random_impact_rule.md).
- Complements [Q collaborator-omission robustness](q_collaborator_omission_robustness.md), which asks whether individual collaborators dominate the inferred Q parameter.
- Connects career-impact modeling to [collective credit allocation](../measures/collective_credit_allocation.md), coauthorship networks, and responsible evaluation.
- Helps keep author-level impact models from silently treating multi-author papers as unambiguous individual accomplishments.
- Supports sensitivity reporting for [Q-model career impact prediction](../methods/q_model_career_prediction.md) and [individual Q parameter](../measures/individual_q_parameter.md).

## Operationalization

- Recompute career-impact measures under alternative authorship-credit rules.
- Compare highest-impact sequence positions, pre/post-peak stationarity, Q estimates, and prediction diagnostics across rules.
- Include robustness samples that remove multi-authored papers or distinguish solo and team-authored publications.
- Report whether conclusions change for fields with different team-size and author-order norms.

## Evidence and Validations

- Verified full-text evidence from Sinatra et al. (2016) reports that the random-impact rule holds whether scientists publish solo or with teams.
- The paper also reports robustness when credit is assigned uniformly or unevenly among collaborators.
- Sinatra et al. include authorship-credit sensitivity in the robustness checks for the no pre/post breakthrough impact-change result.
- This validation separates career-impact timing evidence from the broader problem of allocating credit among coauthors.

## Caveats

- Robustness to several credit rules does not prove any rule is normatively correct.
- Field-specific author order, contribution statements, and large-team conventions can still alter individual-level interpretation.
- Citation impact of coauthored papers can reflect team resources, collaborator status, and venue access as well as individual contributions.

## Links

- [random impact rule](../mechanisms/random_impact_rule.md)
- [pre/post-peak impact stationarity](pre_post_peak_impact_stationarity.md)
- [within-career impact shuffle null](within_career_impact_shuffle_null.md)
- [individual Q parameter](../measures/individual_q_parameter.md)
- [Q collaborator-omission robustness](q_collaborator_omission_robustness.md)
- [Q-model career impact prediction](../methods/q_model_career_prediction.md)
- [collective credit allocation](../measures/collective_credit_allocation.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [author contribution statements](../datasets/author_contribution_statements.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]

## Metadata

- Concept ID: `career_impact_authorship_credit_robustness`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Sinatra et al. (2016) (2016)
- Latest seen paper: Sinatra et al. (2016) (2016)
- Primary reference DOI: `10.1126/science.aaf5239`
- OpenAlex ID: `W2547045893`
- Dimensions ID: `pub.1044965176`
- SciSciNet ID: `W2547045893`
- Aliases: authorship-credit sensitivity; coauthor-credit career robustness; team-credit random-impact robustness; career impact credit allocation check
