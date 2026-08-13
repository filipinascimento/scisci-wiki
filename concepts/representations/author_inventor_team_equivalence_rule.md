# Author-inventor team equivalence rule

## Summary

Cross-domain team-production studies can treat multi-author papers and multi-inventor patents as comparable team outputs while preserving their different institutional meanings.

## Canonical Form

- Unit of analysis: paper, patent, author count, inventor count, team flag, or research domain.
- Typical representation: binary team flag harmonized across papers and patents.
- Mechanism, measurement, or validation target: cross-domain mapping from authorship and inventorship to team production.
- Empirical signature: papers with more than one author and patents with more than one inventor are both classified as team outputs.

## Uses in Science of Science

- Refines cross-domain team representation by linking it to [team authorship share](../measures/team_authorship_share.md) and [mean team size growth](../measures/mean_team_size_growth.md).
- Useful as a reusable check when [wos uspto team production panel](../datasets/wos_uspto_team_production_panel.md) is used in science-of-science inference.
- Creates cross-links to [us utility patent issue scope boundary](../datasets/us_utility_patent_issue_scope_boundary.md) so the motif is not interpreted in isolation.

## Operationalization

- Set paper team status from author count greater than one.
- Set patent team status from inventor count greater than one.
- Keep the legal and social differences between authorship and inventorship in the caveat layer.

## Evidence and Validations

- Verified local full text from Wuchty et al. (2007) defines teams as more than one listed author for publications and more than one inventor for patents.
- The rule creates the measurement bridge that lets the paper compare science, social science, humanities, and patent production.

## Caveats

- Authorship and inventorship follow different legal and field norms.
- The equivalence is a measurement bridge, not evidence that labor organization is identical across domains.

## Links

- [Team-authorship share](../measures/team_authorship_share.md)
- [Mean team-size growth](../measures/mean_team_size_growth.md)
- [WOS-USPTO team-production panel](../datasets/wos_uspto_team_production_panel.md)
- [U.S. utility-patent issue-scope boundary](../datasets/us_utility_patent_issue_scope_boundary.md)
- [Patent examiner citation caveat](../validations/patent_examiner_citation_caveat.md)
- [Authorship structure taxonomy](../measures/authorship_structure_taxonomy.md)

## References

- Wuchty, S., Jones, B. F., & Uzzi, B. (2007). The increasing dominance of teams in production of knowledge. *Science*, 316(5827), 1036-1039. https://doi.org/10.1126/science.1136099 [OpenAlex: W1965631677; Dimensions: pub.1062455003; WoS: unknown]

## Metadata

- Concept ID: `author_inventor_team_equivalence_rule`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Wuchty et al. (2007) (2007)
- Latest seen paper: Wuchty et al. (2007) (2007)
- Primary reference DOI: `10.1126/science.1136099`
- OpenAlex ID: `W1965631677`
- Dimensions ID: `pub.1062455003`
- SciSciNet ID: `W1965631677`
- Aliases: author-inventor team bridge; cross-domain team definition; inventor-count team proxy
