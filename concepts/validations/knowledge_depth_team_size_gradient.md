# Knowledge-depth team-size gradient

## Summary

Knowledge-depth team-size gradient validates the burden-of-knowledge mechanism by testing whether inventions with deeper backward citation trees have larger inventor teams.

## Canonical Form

- Unit of analysis: patent, backward citation tree, inventor team, technology class, application-year cross-section, or patent source category.
- Typical representation: team size regressed on normalized log citation-tree size, quadratic depth terms, field controls, and direct-citation controls.
- Validation target: whether deeper prior-art structures are associated with larger teams.
- Empirical signature: team size increases with citation-tree depth, especially in the upper tail of knowledge depth.

## Uses in Science of Science

- Provides cross-sectional validation for [burden of knowledge](../mechanisms/burden_of_knowledge.md).
- Links [knowledge depth citation trees](../measures/knowledge_depth_citation_trees.md) to [mean team-size growth](../measures/mean_team_size_growth.md), making the team-size pattern more than a time trend.
- Validates the team-coverage logic in [minimum-expertise team assembly](../mechanisms/minimum_expertise_team_assembly.md).
- Supports interpretations of [team impact advantage](../mechanisms/team_impact_advantage.md) where teams substitute for limited individual breadth in knowledge-deep areas.
- Complements [knowledge-depth specialization gradient](knowledge_depth_specialization_gradient.md), which tests the same depth proxy against field switching.

## Operationalization

- Compute a patent's backward citation-tree node count and transform it, often using log node count.
- Normalize tree size within period when mean and variance grow over time.
- Regress team size on the normalized depth measure, allowing nonlinear terms when the depth-team relationship curves upward.
- Include controls for technology category, domestic or foreign source, direct citation counts, and application-year cross-section.
- Interpret the gradient as validation evidence rather than a standalone causal estimate unless stronger identification is available.

## Evidence and Validations

- Verified full-text evidence from Jones (2009) uses the logarithm of nodes in each patent's backward citation tree as a continuous knowledge-depth measure.
- Jones reports that team size rises at an increasing rate as knowledge depth increases.
- For very deep knowledge trees, a one-standard-deviation increase in tree size is associated with an average increase of one person in team size.
- The relationship holds for domestic and foreign-source patents and remains visible with technology-category controls.
- Jones reports that controlling for direct citations strengthens the relationship, reducing the concern that larger teams simply cite more and therefore mechanically create larger trees.

## Caveats

- Citation-tree depth is a proxy for knowledge depth, and patent citation practices can vary across technologies and time.
- Larger teams can be caused by capital intensity, institutions, or project scale as well as knowledge burden.
- Cross-sectional gradients can be confounded by unobserved technology differences.
- Direct-citation controls help but do not fully establish the causal direction from knowledge depth to team size.

## Links

- [burden of knowledge](../mechanisms/burden_of_knowledge.md)
- [minimum-expertise team assembly](../mechanisms/minimum_expertise_team_assembly.md)
- [knowledge depth citation trees](../measures/knowledge_depth_citation_trees.md)
- [mean team-size growth](../measures/mean_team_size_growth.md)
- [team impact advantage](../mechanisms/team_impact_advantage.md)
- [knowledge-depth specialization gradient](knowledge_depth_specialization_gradient.md)
- [education-specialization substitution](../mechanisms/education_specialization_substitution.md)
- [citation networks](../representations/citation_networks.md)
- [patent application-year time anchor](../methods/patent_application_year_time_anchor.md)

## References

- Jones, B. F. (2009). The burden of knowledge and the Death of the Renaissance Man: Is innovation getting harder? *The Review of Economic Studies*, 76(1), 283-317. https://doi.org/10.1111/j.1467-937x.2008.00531.x [OpenAlex: W3124253902; Dimensions: pub.1061936767; WoS: unknown]

## Metadata

- Concept ID: `knowledge_depth_team_size_gradient`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Jones (2009) (2009)
- Latest seen paper: Jones (2009) (2009)
- Primary reference DOI: `10.1111/j.1467-937x.2008.00531.x`
- OpenAlex ID: `W3124253902`
- Dimensions ID: `pub.1061936767`
- SciSciNet ID: `W3124253902`
- Aliases: tree-depth team-size gradient; citation-tree team-size validation; knowledge depth teamwork gradient; patent depth team scaling
