# 2008 psychology journal replication sampling frame

## Summary

The 2008 psychology journal replication sampling frame is the study universe used by Open Science Collaboration to estimate reproducibility by drawing from 2008 articles in three psychology journals and matching feasible studies to replication teams.

## Canonical Form

- Unit of analysis: source article, eligible article pool, selected study, focal effect, replication team, journal, or subdiscipline.
- Typical representation: journal-year article frame, eligibility log, team-claim queue, feasibility exclusion table, or completed-replication panel.
- Mechanism or measurement target: selection into a large-scale replication project and the residual bias created by feasibility and expertise constraints.
- Empirical signature: rolling release of eligible articles, default last-study selection, documented deviations, completed and uncompleted replications, and journal or subdiscipline stratification.

## Uses in Science of Science

- Makes [replication and reproducibility](../validations/replication_reproducibility.md) estimates denominator-aware rather than treating completed replications as a convenience sample.
- Provides the sampling layer for [direct replication protocols](../methods/direct_replication_protocol.md) and [replication success indicator suites](../measures/replication_success_indicator_suite.md).
- Exposes [replication feasibility attrition](../validations/replication_feasibility_attrition.md) and [focal-effect replication selection](../methods/focal_effect_replication_selection.md) as separate provenance layers.
- Uses [rolling replication article-pool assignment](../methods/rolling_replication_article_pool_assignment.md) to reduce selection bias while matching studies to feasible teams.
- Supplies a validation case for broader [crossref DOI sampling frames](crossref_doi_sampling_frame.md), because article-universe definition matters before any outcome audit.

## Operationalization

- Define the journal-year frame before team selection.
- Release small pools of eligible articles to replication teams to limit cherry-picking.
- Default to the last experiment in a multi-study article unless feasibility or original-author guidance justifies a deviation.
- Track unclaimed, infeasible, claimed-but-unfinished, and completed studies separately.
- Store the reason a source article, study, or focal effect deviated from the default selection process.

## Evidence and Validations

- Verified full-text evidence from Open Science Collaboration (2015) defines the frame as 2008 articles from *Psychological Science*, *Journal of Personality and Social Psychology*, and *Journal of Experimental Psychology: Learning, Memory, and Cognition*.
- The paper reports 488 source articles, 158 eligible articles during the project period, 111 selected articles, 113 attempted replications, and 100 completed replications included in the aggregate report.
- The same full text reports that 84 of 100 completed replications used the last reported study in the article, making study choice more reproducible than an ad hoc selection of salient results.
- Feasibility and team expertise still shaped inclusion, especially for expensive, specialized, historical, or hard-to-access samples.
- These attrition patterns are split out in [replication feasibility attrition](../validations/replication_feasibility_attrition.md).

## Caveats

- The frame supports claims about a bounded psychology sample, not all psychology or all science.
- Only one study and one focal effect were used for the aggregate analysis within each article.
- Resource-intensive studies were less likely to be replicated, so broad estimates can underrepresent hard-to-run designs.

## Links

- [replication and reproducibility](../validations/replication_reproducibility.md)
- [direct replication protocol](../methods/direct_replication_protocol.md)
- [rolling replication article-pool assignment](../methods/rolling_replication_article_pool_assignment.md)
- [focal-effect replication selection](../methods/focal_effect_replication_selection.md)
- [replication feasibility attrition](../validations/replication_feasibility_attrition.md)
- [replication success indicator suite](../measures/replication_success_indicator_suite.md)
- [replication effect-size shrinkage](../measures/replication_effect_size_shrinkage.md)
- [crossref DOI sampling frame](crossref_doi_sampling_frame.md)
- [open science interventions](../validations/open_science_interventions.md)

## References

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `psychology_reproducibility_sampling_frame`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Open Science Collaboration (2015) (2015)
- Latest seen paper: Open Science Collaboration (2015) (2015)
- Primary reference DOI: `10.1126/science.aac4716`
- OpenAlex ID: `W1897139626`
- Dimensions ID: `pub.1033571999`
- SciSciNet ID: `W1897139626`
- Aliases: reproducibility project sampling frame; 2008 psychology replication panel; journal-year replication frame
