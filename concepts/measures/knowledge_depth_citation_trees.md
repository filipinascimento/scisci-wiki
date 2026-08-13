# Knowledge depth citation trees

## Summary

Knowledge depth citation trees measure the amount of prior knowledge behind an invention by tracing the backward citation ancestry of a focal patent.

## Canonical Form

- Unit of analysis: patent, inventor, technology class, patent cohort, backward citation tree, or field.
- Typical representation: citation-tree node count, log tree size, normalized tree-depth proxy, or above-median knowledge-depth indicator.
- Measurement target: the depth of prior-art knowledge that an innovator must absorb or coordinate around.
- Empirical signature: larger backward citation trees are associated with larger teams and narrower individual field movement.

## Uses in Science of Science

- Operationalizes [burden of knowledge](../mechanisms/burden_of_knowledge.md) as a patent-level depth measure.
- Links citation-network structure to human-capital outcomes such as specialization, teamwork, and frontier entry.
- Provides an input for [knowledge-burden scale-effects constraint](../mechanisms/knowledge_burden_scale_effects_constraint.md), where deeper knowledge offsets the productivity effects of rising research effort.
- Complements [reference-age search depth](reference_age_search_depth.md), [reference-popularity search](reference_popularity_search.md), and [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md) by measuring depth in patent ancestry rather than paper reference lists.
- Supports tests of whether teams substitute for individual breadth in deep knowledge areas.

## Operationalization

- Starting from a focal patent, recursively collect patents cited by that patent, patents cited by those patents, and so on within the available citation data.
- Count the number of distinct nodes in the backward citation tree.
- Use a log transform or within-period normalization because tree sizes are highly skewed and grow over time.
- Relate the normalized depth measure to team size, [patent field-jump specialization](patent_field_jump_specialization.md), age at first invention, or other innovation-organization outcomes.
- Control for direct citation counts to distinguish deep ancestry from a focal patent simply citing more immediate predecessors.

## Evidence and Validations

- Verified full-text evidence from Jones (2009) defines tree size as the size of the citation tree behind a patent and uses the number of nodes in the backward-looking patent tree as a proxy for underlying knowledge.
- Jones later operationalizes knowledge depth as the logarithm of the number of nodes in the backward citation tree, normalized within period because tree size and variance grow quickly over time.
- The paper reports that team size rises with citation-tree depth, including a strong association for patents with very deep trees.
- Jones reports that solo inventors are less likely to jump technological fields when their initial patent has a larger citation-tree node count, consistent with deeper knowledge inducing specialization.
- The relationship between tree depth and age at first innovation is weak in cross-section, showing that different burden-of-knowledge outcomes need not move identically.
- These patterns are split into [knowledge-depth team-size gradient](../validations/knowledge_depth_team_size_gradient.md) and [knowledge-depth specialization gradient](../validations/knowledge_depth_specialization_gradient.md) validation pages.

## Caveats

- Citation trees are proxies for knowledge depth, not direct measures of what inventors know.
- Truncation matters when citation data begins after older prior art already exists.
- Larger trees can reflect citation conventions or patent-office practices as well as deeper technical knowledge.
- Knowledge depth may matter differently across fields, institutional settings, and team structures.

## Links

- [burden of knowledge](../mechanisms/burden_of_knowledge.md)
- [human-capital transfer bottleneck](../mechanisms/human_capital_transfer_bottleneck.md)
- [knowledge-burden scale-effects constraint](../mechanisms/knowledge_burden_scale_effects_constraint.md)
- [age at first invention](age_at_first_invention.md)
- [patent field-jump specialization](patent_field_jump_specialization.md)
- [inventor application time lag](inventor_application_time_lag.md)
- [knowledge-depth team-size gradient](../validations/knowledge_depth_team_size_gradient.md)
- [knowledge-depth specialization gradient](../validations/knowledge_depth_specialization_gradient.md)
- [education-specialization substitution](../mechanisms/education_specialization_substitution.md)
- [citation networks](../representations/citation_networks.md)
- [reference-age search depth](reference_age_search_depth.md)
- [reference-popularity search](reference_popularity_search.md)
- [task specialization](../mechanisms/task_specialization.md)
- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [science-technology distance](science_technology_distance.md)

## References

- Jones, B. F. (2009). The burden of knowledge and the Death of the Renaissance Man: Is innovation getting harder? *The Review of Economic Studies*, 76(1), 283-317. https://doi.org/10.1111/j.1467-937x.2008.00531.x [OpenAlex: W3124253902; Dimensions: pub.1061936767; WoS: unknown]

## Metadata

- Concept ID: `knowledge_depth_citation_trees`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Jones (2009) (2009)
- Latest seen paper: Jones (2009) (2009)
- Primary reference DOI: `10.1111/j.1467-937x.2008.00531.x`
- OpenAlex ID: `W3124253902`
- Dimensions ID: `pub.1061936767`
- SciSciNet ID: `W3124253902`
- Aliases: patent citation tree size; backward citation tree depth; knowledge depth proxy; patent ancestry node count
