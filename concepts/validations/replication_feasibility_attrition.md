# Replication feasibility attrition

## Summary

Replication feasibility attrition is the selection bias that arises when studies requiring specialized samples, instruments, historical conditions, time, or resources are less likely to be replicated.

## Canonical Form

- Unit of analysis: eligible source article, claimed replication, unfinished replication, infeasible study, resource requirement, sample requirement, or completed-replication panel.
- Typical representation: eligibility-to-completion flow table, unclaimed-study reason code, infeasibility category, or attrition-adjusted replication frame.
- Validation target: determine whether a replication estimate overrepresents studies that are easy to rerun.
- Empirical signature: completed replications are a subset of eligible studies after team matching, resource constraints, feasibility screening, and project deadlines.

## Uses in Science of Science

- Audits the [2008 psychology journal replication sampling frame](../datasets/psychology_reproducibility_sampling_frame.md) before generalizing replication rates.
- Qualifies [direct replication protocols](../methods/direct_replication_protocol.md) because a rigorous protocol only applies to studies that enter and complete the workflow.
- Links reproducibility estimates to [research infrastructure](../datasets/citation_index_research_infrastructure.md) and funding constraints rather than treating replication attempts as costless.
- Provides a design check for [open science interventions](open_science_interventions.md) and replication consortia.

## Operationalization

- Track all studies from full source frame to eligible pool, claimed replications, attempted replications, completed replications, and excluded or unfinished cases.
- Code attrition reasons such as specialized sample, rare population, instrument requirement, historical event, insufficient time, cost, or team expertise mismatch.
- Separate feasibility losses from [rolling replication article-pool assignment](../methods/rolling_replication_article_pool_assignment.md), which governs how eligible studies are exposed to teams.
- Compare completed and uncompleted studies by field, journal, method, sample type, effect size, and required resources.
- Report replication estimates with the completed denominator and the broader eligible denominator.
- Use targeted recruitment or funding to reduce attrition for hard-to-run designs.

## Evidence and Validations

- Verified full-text evidence from Open Science Collaboration (2015) reports 488 source articles, 158 eligible articles during the project period, 111 selected articles, 113 attempted replications, and 100 completed replications.
- The paper reports that some claimed studies were not completed because teams ran out of time or could not devote sufficient resources.
- Among 47 eligible articles that were not claimed, six were deemed infeasible because of time, resources, instrumentation, dependence on historical events, or hard-to-access samples.
- The remaining unclaimed articles often required specialized samples, specialized equipment, or specialized knowledge, and the discussion notes that resource-intensive studies were less likely to be included.

## Caveats

- Feasibility attrition can bias aggregate replication estimates in either direction, depending on whether hard-to-run studies are more or less reproducible.
- Some infeasibility is temporary: funding, infrastructure, or shared materials may make future replication possible.
- A transparent attrition table does not by itself correct selection bias; it documents where targeted follow-up is needed.

## Links

- [2008 psychology journal replication sampling frame](../datasets/psychology_reproducibility_sampling_frame.md)
- [rolling replication article-pool assignment](../methods/rolling_replication_article_pool_assignment.md)
- [direct replication protocol](../methods/direct_replication_protocol.md)
- [focal-effect replication selection](../methods/focal_effect_replication_selection.md)
- [replication and reproducibility](replication_reproducibility.md)
- [open science interventions](open_science_interventions.md)
- [study power and false-positive risk](../measures/study_power_false_positive_risk.md)

## References

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `replication_feasibility_attrition`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Open Science Collaboration (2015) (2015)
- Latest seen paper: Open Science Collaboration (2015) (2015)
- Primary reference DOI: `10.1126/science.aac4716`
- OpenAlex ID: `W1897139626`
- Dimensions ID: `pub.1033571999`
- SciSciNet ID: `W1897139626`
- Aliases: replication selection attrition; replication feasibility bias; hard-to-replicate study attrition; replication completion bias
