# Funding-award disruption contrast

## Summary

Funding-award disruption contrast compares funded papers with prize-winning papers to test whether formal support and retrospective recognition select different regions of the disruption/team-size landscape.

## Canonical Form

- Unit of analysis: paper, funding acknowledgment, grant agency, award-linked paper, journal-time control group, team-size bin, or disruption percentile.
- Typical representation: funded versus award-winning overlays on a team-size by disruption map.
- Validation target: test whether the work later recognized as disruptive is overrepresented in the same places where grant funding is observed.
- Empirical signature: funded papers concentrate in large developmental regions while prize-linked papers concentrate more strongly in small disruptive regions.

## Uses in Science of Science

- Links [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md) to the team-science pattern in [team size and disruption](../mechanisms/team_size_disruption.md).
- Uses [funding acknowledgments](../datasets/funding_acknowledgments.md) as an observed funding layer while showing why acknowledgment-based evidence should be interpreted cautiously.
- Complements award and recognition motifs such as [Nobel-prize credit validation](nobel_prize_credit_validation.md) and [prize-winner strategy enrichment](prize_winner_strategy_enrichment.md).

## Operationalization

- Identify papers with funding acknowledgments from specified agencies and compare them to same-period, same-journal controls.
- Identify award-linked papers and compare them to same-journal, same-period controls.
- Compute disruption and team size for each set.
- Estimate whether funded and award-linked papers over- or under-sample small disruptive and large developmental regions.
- Audit [WOS funding-acknowledgment onset bias](wos_funding_acknowledgment_onset_bias.md) before interpreting missing funding fields or long historical denominators.

## Evidence and Validations

- Verified full-text evidence from Wu, Wang, and Evans (2019) analyzes 477,702 WOS papers from 2004-2014 acknowledging NSF, ERC/EC, NSFC, DFG, or JSPS funding.
- The funded set has average disruption of -0.0024, ranking near the bottom 31% of same-period WOS papers.
- Wu et al. report that small teams with such funding are indistinguishable from large teams in their tendency to develop rather than disrupt.
- In NSF-funded papers, the probability of observing small-team disruptive work is almost half that in a matched control group; in 877 Nobel-prize-winning papers, the average disruption is 0.10, ranking in the top 2%, and small-team disruptive papers are nearly three times as common as in controls.

## Caveats

- Funding acknowledgments are incomplete and became much more consistently recorded in WOS after 2008.
- Coverage-onset effects mean the funded-paper denominator is strongest in post-onset windows, and Dimensions grant metadata may be a useful freshness check where available.
- Prize-linked papers are selected retrospectively and can reflect historical credit allocation as much as discovery.
- Funded papers can acknowledge multiple agencies, and grant size or program type may matter more than the presence of funding alone.

## Links

- [funding acknowledgments](../datasets/funding_acknowledgments.md)
- [funding incentives and exploration](../mechanisms/funding_incentives_and_exploration.md)
- [funding autonomy and exploration](../mechanisms/funding_autonomy_exploration.md)
- [grant-acknowledgment output linkage](../methods/grant_acknowledgment_output_linkage.md)
- [WOS funding-acknowledgment onset bias](wos_funding_acknowledgment_onset_bias.md)
- [team size and disruption](../mechanisms/team_size_disruption.md)
- [small-team deep-search delay](../mechanisms/small_team_deep_search_delay.md)
- [team-size disruption-impact tail divergence](team_size_disruption_impact_tail_divergence.md)
- [Nobel-prize credit validation](nobel_prize_credit_validation.md)
- [prize-winner strategy enrichment](prize_winner_strategy_enrichment.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]

## Metadata

- Concept ID: `funding_award_disruption_contrast`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Wu et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: funded Nobel disruption contrast; grant award disruption comparison; funding recognition disruption split; NSF Nobel team-size contrast
