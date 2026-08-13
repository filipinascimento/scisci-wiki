# Large-team author-disambiguation bias

## Summary

Large-team author-disambiguation bias is the possibility that coauthor-based name resolution performs differently for large teams, making team-size analyses sensitive to author-identity construction.

## Canonical Form

- Unit of analysis: author identity, name block, coauthor set, team-size bin, or disambiguated career.
- Typical representation: direction-of-bias audit, sensitivity check, or limitation statement for coauthor-based disambiguation.
- Validation target: determine whether team-size findings depend on name-resolution methods that favor large, recent, or highly connected teams.
- Empirical signature: disambiguation accuracy or inclusion probability varies with team size and author activity.

## Uses in Science of Science

- Adds a team-science caveat to [author name disambiguation](../methods/author_name_disambiguation.md).
- Links [homonym and synonym author errors](homonym_synonym_author_errors.md) to downstream analyses of disruption, collaboration, and career trajectories.
- Supports conservative interpretation of [within-author team-size disruption test](within_author_team_size_disruption_test.md).

## Operationalization

- Identify whether the disambiguation algorithm uses coauthors as a major feature.
- Check accuracy or match rates by team size, publication year, and author activity.
- Repeat focal analyses with alternative disambiguation sources where possible.
- Report whether any expected bias would strengthen or weaken the focal result.

## Evidence and Validations

- Verified full-text evidence from Wu et al. (2019) notes that coauthor-based name disambiguation can favor larger teams and recent active scholars.
- The paper presents this as a relevant limitation for author-level team-size robustness analyses.
- This caveat helps distinguish a substantive team-size mechanism from artifacts induced by author-identity construction.

## Caveats

- The direction of bias depends on the disambiguation algorithm and available metadata.
- Large-team bias can interact with field conventions and author-name commonness.
- A limitation statement is not a substitute for a gold-standard disambiguation audit.

## Links

- [author name disambiguation](../methods/author_name_disambiguation.md)
- [homonym and synonym author errors](homonym_synonym_author_errors.md)
- [within-author team-size disruption test](within_author_team_size_disruption_test.md)
- [team size and disruption](../mechanisms/team_size_disruption.md)
- [coauthorship name-resolution bounds](coauthorship_name_resolution_bounds.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; SciSciNet: W2913773162; WoS: unknown]

## Metadata

- Concept ID: `large_team_author_disambiguation_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Wu et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: coauthor-based large-team disambiguation bias; team-size name-resolution bias; large-team identity-linkage caveat; coauthor disambiguation selection bias
