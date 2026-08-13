# Replication denominator scope limit

## Summary

Replication denominator scope limit is the generalizability boundary created when a reproducibility estimate is based on a restricted set of journals, articles, studies, focal effects, and completed replications.

## Canonical Form

- Unit of analysis: source article, selected study, focal effect, attempted replication, completed replication, or excluded case.
- Typical representation: denominator flow from sampling frame to eligible article, selected study, feasible protocol, completed replication, and analyzed effect.
- Validation target: whether a replication rate describes a literature, a sampled frame, a completed subset, or only a selected focal-effect portfolio.
- Empirical signature: reproducibility claims state every denominator transition and its exclusions.

## Uses in Science of Science

- Qualifies estimates from the [2008 psychology journal replication sampling frame](../datasets/psychology_reproducibility_sampling_frame.md).
- Complements [focal-effect replication selection](../methods/focal_effect_replication_selection.md) and [replication feasibility attrition](replication_feasibility_attrition.md).
- Makes [replication success indicator suite](../measures/replication_success_indicator_suite.md) interpretable by attaching each rate to its denominator.
- Supports evidence reuse through the [replication outcome master dataset](../datasets/replication_outcome_master_dataset.md).

## Operationalization

- Record the original publication frame and article-selection rule.
- Track how many studies per article and how many effects per study were selected for replication.
- Document feasibility exclusions, non-completed attempts, and resource-driven substitutions.
- State whether success rates use attempted, completed, eligible, or original-frame denominators.
- Avoid extrapolating beyond the sampled journals, publication year, completed studies, and focal effects.

## Evidence and Validations

- Verified full-text evidence from Open Science Collaboration (2015) samples from three psychology journals in 2008, generally selects one study from each article, and tests one focal effect from each selected study.
- The full text notes that resource-intensive or infeasible studies were less likely to be completed, creating a scope limit for population claims.
- The final 100 completed replications are therefore an analyzed denominator, not a complete census of psychology findings.

## Caveats

- Denominator restrictions can bias success rates upward or downward depending on which studies are feasible.
- One focal effect may not represent all claims in an original article.
- Journal-year sampling frames can underrepresent subfields, methods, and publication types.
- Transparent denominators do not solve the selection problem, but they make it auditable.

## Links

- [2008 psychology journal replication sampling frame](../datasets/psychology_reproducibility_sampling_frame.md)
- [focal-effect replication selection](../methods/focal_effect_replication_selection.md)
- [replication feasibility attrition](replication_feasibility_attrition.md)
- [replication success indicator suite](../measures/replication_success_indicator_suite.md)
- [replication outcome master dataset](../datasets/replication_outcome_master_dataset.md)
- [direct replication protocol](../methods/direct_replication_protocol.md)

## References

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `replication_denominator_scope_limit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Open Science Collaboration (2015) (2015)
- Latest seen paper: Open Science Collaboration (2015) (2015)
- Primary reference DOI: `10.1126/science.aac4716`
- OpenAlex ID: `W1897139626`
- Dimensions ID: `pub.1033571999`
- SciSciNet ID: `W1897139626`
- Aliases: replication denominator boundary; reproducibility sampling scope; completed-replication denominator; focal-effect denominator limit
