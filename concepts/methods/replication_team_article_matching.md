# Replication-team article matching

## Summary

Replication teams can be matched to eligible articles and effects through a managed assignment process that balances feasibility, expertise, and sampling-frame coverage.

## Canonical Form

- Unit of analysis: replication team, target article, focal effect, assignment pool, or feasibility screen.
- Typical representation: team-to-article assignment table with eligibility and attrition fields.
- Mechanism, measurement, or validation target: sampling-frame execution in multi-team replication projects.
- Empirical signature: eligible articles move from a rolling pool to assigned replication teams with documented attrition and denominator changes.

## Uses in Science of Science

- Connects replication sampling-frame execution to [psychology reproducibility sampling frame](../datasets/psychology_reproducibility_sampling_frame.md) and [rolling replication article pool assignment](rolling_replication_article_pool_assignment.md).
- Provides a reusable motif for comparing [replication feasibility attrition](../validations/replication_feasibility_attrition.md) with adjacent science-of-science constructs.
- Should be cross-referenced when interpreting [replication denominator scope limit](../validations/replication_denominator_scope_limit.md) in linked scholarly data.

## Operationalization

- Maintain an article pool with eligibility, assignment, feasibility, and team-status fields.
- Record why a target effect or article is skipped, reassigned, or completed.
- Use assignment logs to reconstruct the denominator for final replication-rate estimates.

## Evidence and Validations

- Verified full-text evidence from Open Science Collaboration (2015) describes a defined psychology sampling frame and a multi-lab process for assigning replication teams to studies.
- The project required converting article eligibility into executable team assignments.

## Caveats

- Assignment feasibility can bias which studies are replicated.
- Team expertise can improve fidelity while also introducing selection into the replication denominator.

## Links

- [2008 psychology journal replication sampling frame](../datasets/psychology_reproducibility_sampling_frame.md)
- [Rolling replication article-pool assignment](rolling_replication_article_pool_assignment.md)
- [Replication feasibility attrition](../validations/replication_feasibility_attrition.md)
- [Replication denominator scope limit](../validations/replication_denominator_scope_limit.md)
- [Direct replication protocol](direct_replication_protocol.md)
- [Focal-effect replication selection](focal_effect_replication_selection.md)

## References

- Open Science Collaboration. (2015). Estimating the reproducibility of psychological science. *Science*, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716 [OpenAlex: W1897139626; Dimensions: pub.1033571999; WoS: unknown]

## Metadata

- Concept ID: `replication_team_article_matching`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Open Science Collaboration (2015) (2015)
- Latest seen paper: Open Science Collaboration (2015) (2015)
- Primary reference DOI: `10.1126/science.aac4716`
- OpenAlex ID: `W1897139626`
- Dimensions ID: `pub.1033571999`
- SciSciNet ID: `W1897139626`
- Aliases: replication article assignment; team-study matching; rolling replication assignment; multi-lab article matching
