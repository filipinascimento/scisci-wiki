# Direct citation-propensity control

## Summary

Direct citation-propensity control adds a patent's direct reference count or citation-making tendency to test whether citation-tree depth effects are only artifacts of citing more prior patents.

## Canonical Form

- Unit of analysis: patent, reference list, citation tree, direct citation count, model coefficient, or knowledge-depth estimate.
- Typical representation: regression control for normalized direct citations made by the focal patent.
- Validation target: distinguish deep prior-art ancestry from simple citation propensity.
- Empirical signature: citation-tree effects persist after controlling for the number of direct citations.

## Uses in Science of Science

- Validates [knowledge depth citation trees](../measures/knowledge_depth_citation_trees.md).
- Supports [knowledge-depth team-size gradient](knowledge_depth_team_size_gradient.md), [knowledge-depth specialization gradient](knowledge_depth_specialization_gradient.md), and [age at first invention](../measures/age_at_first_invention.md) models.
- Generalizes to paper reference-list studies where long bibliographies can confound depth or breadth measures.

## Operationalization

- Count direct citations or references made by each focal patent or paper.
- Normalize direct citation counts where fields, cohorts, or document types differ.
- Include the direct count alongside tree-depth, reference-depth, or ancestry measures.
- Interpret remaining depth effects as less likely to be driven by reference-list length alone.

## Evidence and Validations

- Verified full-text evidence from Jones (2009) raises the concern that bigger teams may have larger citation trees because they cite more patents directly.
- Jones controls for variation in direct citations made by each patent and reports that the relationship between citation-tree depth and team size remains.
- The paper also notes that bigger teams tend to cite fewer patents directly, making simple citation propensity an unlikely explanation for the tree-depth pattern.

## Caveats

- Direct citation counts can themselves reflect examiner additions, patent-office practice, and field norms.
- Controlling direct citations can remove part of a real search-breadth mechanism if deeper projects require more direct prior art.
- The control does not solve missing or inconsistent patent-citation coverage.

## Links

- [knowledge depth citation trees](../measures/knowledge_depth_citation_trees.md)
- [knowledge-depth team-size gradient](knowledge_depth_team_size_gradient.md)
- [knowledge-depth specialization gradient](knowledge_depth_specialization_gradient.md)
- [age at first invention](../measures/age_at_first_invention.md)
- [citation-tree log-median robustness](citation_tree_log_median_robustness.md)
- [reference-list dilution](../mechanisms/reference_list_dilution.md)

## References

- Jones, B. F. (2009). The burden of knowledge and the Death of the Renaissance Man: Is innovation getting harder? *The Review of Economic Studies*, 76(1), 283-317. https://doi.org/10.1111/j.1467-937x.2008.00531.x [OpenAlex: W3124253902; Dimensions: pub.1061936767; SciSciNet: W3124253902; WoS: unknown]

## Metadata

- Concept ID: `direct_citation_propensity_control`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Jones (2009) (2009)
- Latest seen paper: Jones (2009) (2009)
- Primary reference DOI: `10.1111/j.1467-937x.2008.00531.x`
- OpenAlex ID: `W3124253902`
- Dimensions ID: `pub.1061936767`
- SciSciNet ID: `W3124253902`
- Aliases: direct-reference control; patent citation-propensity audit; reference-count confound control; citation-tree direct-citation control
